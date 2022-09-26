import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Order} from "../models/Order";
import {ProductTypesEnum} from "../models/ProductTypesEnum";
import {kataRound} from "../../../utils/utils";
import {
  TAX_FOR_BOOKS,
  TAX_FOR_FOOD,
  TAX_FOR_IMPORTED_PRODUCTS,
  TAX_FOR_MEDS,
  TAX_FOR_OTHERS_TYPES
} from "../../../utils/consts";
import {Bill} from "../models/Bill";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  ordersSubject$ = new BehaviorSubject<Order[]>([]);
  billSubject$ = new BehaviorSubject<Bill>({orders: [], taxAmount: 0, total: 0,});
  private _orders: Order[] = [];
  private _bill: Bill = {orders: [], taxAmount: 0, total: 0,};

  constructor() { }

  add(order: Order): void {
    this._orders.push(order);
    this._bill = {
      orders: this._orders,
      taxAmount: this._bill.taxAmount += (order.pttc - order.pht * order.amount),
      total: this._bill.total += order.pttc,
    }
    this.ordersSubject$.next(this._orders);
    this.billSubject$.next(this._bill);
  }

  static getTaxPercent(productType: ProductTypesEnum): number {
    switch (productType){
      case ProductTypesEnum.FOOD : { return(TAX_FOR_FOOD);}
      case ProductTypesEnum.MED : { return(TAX_FOR_MEDS);}
      case ProductTypesEnum.BOOK : {return(TAX_FOR_BOOKS);}
      case ProductTypesEnum.OTHER : {return(TAX_FOR_OTHERS_TYPES);}
      default: { return(TAX_FOR_OTHERS_TYPES);}
    }
  }

  static calculatePTTC(pht: number, productType: ProductTypesEnum, isImported: boolean, productAmount: number): number {
    let taxValue: number = OrdersService.getTaxPercent(productType);
    let tax: number = kataRound(pht * taxValue / 100);
    tax = isImported ? (tax + kataRound(pht * TAX_FOR_IMPORTED_PRODUCTS / 100)) : tax;
    tax *= productAmount;
    return kataRound(pht * productAmount + tax);
  }

}
