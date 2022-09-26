import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import {Order} from "../../models/Order";
import {OrdersService} from "../../services/orders.service";
import {Bill} from "../../models/Bill";

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  billSubject$ = new BehaviorSubject<Bill>({orders: [], taxAmount: 0, total: 0,});

  constructor(
    private ordersService: OrdersService,
  ) {
  }

  ngOnInit(): void {
    this.billSubject$ = this.ordersService.billSubject$;
  }

  printBill() {
    window.print();
  }
}
