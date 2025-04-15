class Product {
    constructor(name, description) {
      this.name = name;
      this.description = description;
    }
  
    static #products = [];
  
    static getAll() {
      return Product.#products;
    }
  
    static add(newProduct) {
      Product.#products.push(newProduct);
    }
  
    static findByName(productName) {
      return Product.#products.find(product => product.name === productName);
    }
  
    static deleteByName(productName) {
      const index = Product.#products.findIndex(product => product.name === productName);
      if (index !== -1) {
        Product.#products.splice(index, 1);
      }
    }
  
    static getLast() {
      return Product.#products.length > 0 ? Product.#products[Product.#products.length - 1] : undefined;
    }
  }
  
  module.exports = Product;
  