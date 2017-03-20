var {defineSupportCode} = require('cucumber');
var assert = require('assert');
var Account = require('../../app/account');
var Order = require('../../app/order');
var Warehouse = require('../../app/warehouse');
var Product = require('../../app/product');

defineSupportCode(function({Given, When, Then}) {
  let account = new Account();
  let order = new Order(account);
  let warehouse = new Warehouse();
  let gizmo = new Product("Gizmo");

  Given('A gizmo costs {float}', (price, callback) => {
    gizmo.price = price;
    callback();
  });

  Given('I have added {int} gizmos to my order', (quantity, callback) => {
    order.add(gizmo, quantity);
    callback();
  });

  Given('There are {int} gizmos in stock', (inventory, callback) => {
    warehouse.add(gizmo, inventory);
    callback();
  });

  When('The order is placed', (callback) => {
    warehouse.fulfill(order);
    callback();
  });

  Then('The order should be fulfilled', (callback) => {
    assert(order.isFulfilled, "Order was not fulfilled")
    callback();
  });

  Then('The order total should be {float}', (total, callback) => {
    assert.equal(order.total, total, `Incorrect order total: ${order.total}`);
    callback();
  });

  Then('My account should be charged {float}', (total, callback) => {
    assert.equal(account.balance, total, `Incorrect account charge: ${account.balance}`);
    callback();
  });

  Then('There should now be {int} gizmos in stock', (newInventory, callback) => {
    let inStock = warehouse.get(gizmo).quantity;
    assert.equal(inStock, newInventory, `Incorrect number of gizmos in stock: ${inStock}`);
    callback();
  });

  Then('The order should not be fulfilled', (callback) => {
    assert(!order.isFulfilled, "The order should not have been fulfilled");
    callback();
  });

  Then('The quantity of gizmos should be adjusted to {int}', (newQuantity, callback) => {
    let quantity = order.get(gizmo).quantity;
    assert.equal(quantity, newQuantity, `The number of gizmos was adjusted improperly: ${quantity}`);
    callback();
  });

  Then('{int} gizmos should be backordered', (backorderedQuantity, callback) => {
    let backordered = order.get(gizmo).backordered;
    assert.equal(backordered, backorderedQuantity, `Incorrect number of gizmos backordered: ${backordered}`);
    callback();
  });
});
