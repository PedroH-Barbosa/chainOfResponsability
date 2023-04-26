import { BaseBudgetHandler } from "./baseBudget";
import { CustomerBudget } from "./customerBudget";

export class ManagerBudget extends BaseBudgetHandler{
    handle(budget: CustomerBudget): CustomerBudget {
        if (budget.price <= 5000){
            console.log('o gerente tratou o pedido');
            budget.approved = true;
            return budget;
        }

        return super.handle(budget);
    }
}