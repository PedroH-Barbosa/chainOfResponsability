import { CustomerBudget } from "./customerBudget";
import { DirectorBudget } from "./directorBudget";
import { ManagerBudget } from "./managerBudget";
import { SellerBudget } from "./sellerBudget";

const customerBudget = new CustomerBudget(1000);

const seller = new SellerBudget();
seller
.setNextHandler(new ManagerBudget())
.setNextHandler(new DirectorBudget());

seller.handle(customerBudget);
console.log(customerBudget);