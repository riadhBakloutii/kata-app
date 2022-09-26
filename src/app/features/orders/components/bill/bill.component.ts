import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import {Order} from "../../models/Order";
import {OrdersService} from "../../services/orders.service";

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  ordersList$: BehaviorSubject<Order[]> = new BehaviorSubject<Order[]>([]);
  taxAmounts$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  total$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(
    private ordersService: OrdersService,
  ) {
  }

  ngOnInit(): void {
    this.ordersList$ = this.ordersService.ordersSubject$;
    this.taxAmounts$ = this.ordersService.taxAmounts$;
    this.total$ = this.ordersService.total$;
  }

}
