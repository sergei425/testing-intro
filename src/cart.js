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
function changeQuantity() {
  return notImplemented();
}
function removeFromCart() {
  return notImplemented();
}
function calculateCartSubtotal() {
  return notImplemented();
}
function calculateOrderTotal() {
  return notImplemented();
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
