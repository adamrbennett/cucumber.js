'use strict';

class Order {

  constructor(account) {
    this.account = account;
    this.items = {};
    this.isFulfilled = false;
    this.total = 0.00;
  }

  add(product, quantity) {
    let item = this.get(product);
    item.quantity = quantity;
    this.total += item.product.price * quantity;
  }

  get(product) {
    let item = this.items[product.type];
    if (item === undefined)
      item = this.items[product.type] = {
        product: product
      };

    return item;
  }

}

module.exports = Order;
