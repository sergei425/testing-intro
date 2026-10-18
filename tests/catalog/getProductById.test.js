const products = require('../../src/data/products');
const { getProductById } = require('../../src/catalog');

describe('getProductById', () => {
  test('ID 1 возвращает products[0]', () => {
    const productsItem = getProductById(products, 1)
    expect(productsItem).toEqual(products[0])
  });
  test('ID 4 возвращает products[3]', () => {
    const productsItem = getProductById(products, 4)
    expect(productsItem).toEqual(products[3])
  })
  test('ID 6 возвращает products[5]', () => {
    const productsItem = getProductById(products, 6)
    expect(productsItem).toEqual(products[5])
  });
  test('ID 0 возвращает null', () => {
    const productsItem = getProductById(products, null)
    expect(productsItem).toBeNull()
  });
  test('ID 999 возвращает null', () => {
    const productsItem = getProductById(products, 999)
    expect(productsItem).toBeNull()
  });
  test('ID -1 возвращает null', () => {
    const productsItem = getProductById(products, -1)
    expect(productsItem).toBeNull()
  });
  test("строковый ID '1' возвращает null", () => {
    const productsItem = getProductById(products, '1')
    expect(productsItem).toBeNull()
  });
  test('ID undefined возвращает null', () => {
    const productsItem = getProductById(products, undefined)
    expect(productsItem).toBeNull()
  });
  test('ID NaN возвращает null', () => {
    const productsItem = getProductById(products, NaN)
    expect(productsItem).toBeNull()
  });
});
