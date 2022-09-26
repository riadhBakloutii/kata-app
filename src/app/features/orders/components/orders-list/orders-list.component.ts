import {Component, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";
import {Order} from "../../models/Order";
import {OrdersService} from "../../services/orders.service";
import {NewOrderForm} from "../../models/newOrderForm";
import {mapOrderFromForm} from "../../mappers/orderMapper";
import {Router} from "@angular/router";
import {APP_ROUTES} from "../../../../common/app-routes";

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {

  ordersList$: Observable<Order[]> = of([]);

  constructor(
    private ordersService: OrdersService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.ordersList$ = this.ordersService.ordersSubject$;
  }

  onAddNewOrder(newOrderForm: NewOrderForm): void {
    this.ordersService.addOrder(mapOrderFromForm(newOrderForm));
  }

  generateBill(): void {
    this.router.navigate([APP_ROUTES.bill]);
  }

}
