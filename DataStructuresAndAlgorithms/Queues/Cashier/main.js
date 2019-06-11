"use strict";

// A cashier class that takes in a customer object and handles food ordering on a first-come, first-served basis

import Queue from "../main";

// Customer class
class Customer {
    constructor(name, food) {
        this.name = name;
        this.food = food;
    }

    getInfo() {
        return {
            name: this.name,
            food: this.food
        };
    }
}

// Cashier class
class Cashier {
    constructor() {
        this.orders = new Queue();
    }

    addOrder(customer) {
        this.orders.enqueue(customer.getInfo());
    }

    deliverOrder() {
        let order = this.orders.dequeue();
        return order.name + ", your " + order.food + "...";
    }

    deliverAllOrders() {
        while (!this.orders.isEmpty()) {
            console.log(this.deliverOrder());
        }
    }
}

let cashier = new Cashier();

let customer1 = new Customer("Jim", "Fries");
let customer2 = new Customer("Sammie", "Burger");
let customer3 = new Customer("Pete", "Drink");

cashier.addOrder(customer1);
cashier.addOrder(customer2);
cashier.addOrder(customer3);

cashier.deliverAllOrders();
