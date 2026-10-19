function notImplemented() {
  throw new Error("Корзина ещё не реализована. Сначала прочитайте тесты.");
}

let cart = [];

function addToCart(cart, rank, quantity) {
  if (quantity === 0) {
    throw new RangeError("не принимает нулевое значение");
  }

  if (quantity >= rank.stock) {
    throw new RangeError("не может быть больше чем в знчении stock");
  }

  const cartItem = cart.find((item) => item.id === rank.id);

  if (cartItem) {
    cartItem.quantity += quantity;
  } else {
    cart.push({ ...rank, quantity });
  }
  return cart;
}
function changeQuantity(card, id, quantity) {
  if (quantity === 0) {
    throw new RangeError("не принимает нулевое значение");
  }

  const cartItem = card.find(item => item.id === id)

  if (cartItem && quantity >= cartItem.stock) {
    throw new RangeError("не может быть больше чем в знчении stock");
  }

  if (cartItem) {
    cartItem.quantity = quantity
  } 
  
  return card
}
function removeFromCart(cart, id) {
  const cartItemIndex = cart.findIndex(item => item.id === id)
  if (cartItemIndex !== -1) {
    cart.splice(cartItemIndex, 1)
  }
  return cart
}
function calculateCartSubtotal(cart) {
  if (cart.length === 0) {
    return 0
  } 
  return cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
}
function calculateOrderTotal(cart, promo) {
  let subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)
  let delivery = subtotal > 50000 ? 0 : 30000
  let discount = promo === 'SAVE10' && subtotal > 20000 ? subtotal * 0.1 : 0
   
  return {subtotal, discount, delivery, total: subtotal + delivery - discount}
}

const cartApi = {
  addToCart,
  changeQuantity,
  removeFromCart,
  calculateCartSubtotal,
  calculateOrderTotal,
};

if (typeof module !== "undefined") module.exports = cartApi;
if (typeof window !== "undefined") window.cartApi = cartApi;
