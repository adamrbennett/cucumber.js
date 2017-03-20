'use strict';

class Warehouse {

  constructor() {
    this.items = {};
  }

  add(product, quantity) {
    this.get(product).quantity = quantity;
  }

  get(product) {
    let item = this.items[product.type];
    if (item === undefined)
      item = this.items[product.type] = {
        product: product
      };

    return item;
  }

  fulfill(order) {
    let fulfilled = false;
    for (let prop in order.items) {
      let orderItem = order.items[prop];
      let stockItem = this.get(orderItem.product);

      if (stockItem.quantity >= orderItem.quantity) {
        stockItem.quantity -= orderItem.quantity;
        fulfilled = true;
      } else if (stockItem.quantity > 0) {
        orderItem.backordered = orderItem.quantity - stockItem.quantity;
        orderItem.quantity = stockItem.quantity;
        stockItem.quantity = 0;
        fulfilled = false;
      }

      order.account.balance += orderItem.quantity * orderItem.product.price;
    }
    order.isFulfilled = fulfilled;
  }

}

module.exports = Warehouse;
