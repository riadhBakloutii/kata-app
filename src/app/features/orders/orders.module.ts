import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersListComponent } from './components/orders-list/orders-list.component';
import { AddOrderComponent } from './components/add-order/add-order.component';
import {OrdersRoutingModule} from "./orders-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {BillComponent} from "./components/bill/bill.component";



@NgModule({
  declarations: [
    OrdersListComponent,
    AddOrderComponent,
    BillComponent,
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    ReactiveFormsModule,
  ]
})
export class OrdersModule { }
