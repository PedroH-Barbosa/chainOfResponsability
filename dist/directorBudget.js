"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectorBudget = void 0;
const baseBudget_1 = require("./baseBudget");
class DirectorBudget extends baseBudget_1.BaseBudgetHandler {
    handle(budget) {
        if (budget.price <= 10000) {
            console.log('o diretor tratou o pedido');
            budget.approved = true;
            return budget;
        }
        return super.handle(budget);
    }
}
exports.DirectorBudget = DirectorBudget;
//# sourceMappingURL=directorBudget.js.map