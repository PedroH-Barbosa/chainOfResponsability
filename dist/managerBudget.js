"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagerBudget = void 0;
const baseBudget_1 = require("./baseBudget");
class ManagerBudget extends baseBudget_1.BaseBudgetHandler {
    handle(budget) {
        if (budget.price <= 5000) {
            console.log('o gerente tratou o pedido');
            budget.approved = true;
            return budget;
        }
        return super.handle(budget);
    }
}
exports.ManagerBudget = ManagerBudget;
//# sourceMappingURL=managerBudget.js.map