"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customerBudget_1 = require("./customerBudget");
const directorBudget_1 = require("./directorBudget");
const managerBudget_1 = require("./managerBudget");
const sellerBudget_1 = require("./sellerBudget");
const customerBudget = new customerBudget_1.CustomerBudget(4000);
const seller = new sellerBudget_1.SellerBudget();
seller
    .setNextHandler(new managerBudget_1.ManagerBudget())
    .setNextHandler(new directorBudget_1.DirectorBudget());
seller.handle(customerBudget);
console.log(customerBudget);
//# sourceMappingURL=main.js.map