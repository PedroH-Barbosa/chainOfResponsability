import { BaseBudgetHandler } from "./baseBudget";
import { CustomerBudget } from "./customerBudget";

export class DirectorBudget extends BaseBudgetHandler{
    handle(budget: CustomerBudget): CustomerBudget {
        if (budget.price <= 10000){
            console.log('o diretor tratou o pedido');
            budget.approved = true;
            return budget;
        }

        return super.handle(budget);
    }
}