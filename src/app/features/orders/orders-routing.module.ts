import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {OrdersListComponent} from "./components/orders-list/orders-list.component";
import {AddOrderComponent} from "./components/add-order/add-order.component";

const routes: Routes = [
  {
    path: '',
    component: OrdersListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
