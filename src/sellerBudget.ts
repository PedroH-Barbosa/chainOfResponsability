import { BaseBudgetHandler } from "./baseBudget";
import { CustomerBudget } from "./customerBudget";

export class SellerBudget extends BaseBudgetHandler{
    handle(budget: CustomerBudget): CustomerBudget {
        if (budget.price <= 1000){
            console.log('o vendedor tratou o pedido');
            budget.approved = true;
            return budget;
        }

        return super.handle(budget);
    }
}