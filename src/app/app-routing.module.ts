import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BillComponent} from "./features/orders/components/bill/bill.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/orders',
    pathMatch: 'full',
  },
  {
    path: 'orders',
    loadChildren: ()=> import("./features/orders/orders.module").then(m => m.OrdersModule)
  },
  {
    path: 'bill',
    component: BillComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
