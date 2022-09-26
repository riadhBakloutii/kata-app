import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {OrdersListComponent} from "./components/orders-list/orders-list.component";
import {BillComponent} from "./components/bill/bill.component";

const routes: Routes = [
  {
    path: '',
    component: OrdersListComponent
  },
  {
    path: 'bill',
    component: BillComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
