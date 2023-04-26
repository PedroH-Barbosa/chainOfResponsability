"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellerBudget = void 0;
const baseBudget_1 = require("./baseBudget");
class SellerBudget extends baseBudget_1.BaseBudgetHandler {
    handle(budget) {
        if (budget.price <= 1000) {
            console.log('o vendedor tratou o pedido');
            budget.approved = true;
            return budget;
        }
        return super.handle(budget);
    }
}
exports.SellerBudget = SellerBudget;
//# sourceMappingURL=sellerBudget.js.map