import {TestBed} from '@angular/core/testing';

import {OrdersService} from './orders.service';
import {Order} from "../models/Order";
import {TAX_FOR_BOOKS} from "../../../utils/consts";
import {Bill_MOCK, ORDER_MOCK, TOTAL_MOCK, TOTAL_TAX_AMOUNT_MOCK} from "../../../utils/mocks";
import {Bill} from "../models/Bill";

describe('OrdersService', () => {
  let service: OrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the tax value', () => {
    expect(OrdersService.getTaxPercent(ORDER_MOCK.type,)).toEqual(TAX_FOR_BOOKS);
  });

  it('should calculate pttc of the order', () => {
    expect(OrdersService.calculatePTTC(
      ORDER_MOCK.pht,
      ORDER_MOCK.type,
      ORDER_MOCK.isImported,
      ORDER_MOCK.amount
    )).toEqual(ORDER_MOCK.pttc);
  });

  it('should add new order', (done:DoneFn) => {
    service.addOrder(ORDER_MOCK);
    service.ordersSubject$.subscribe((ordersList: Order[]) => {
      expect(ordersList.length).toEqual(1);
      done();
    });
  });

  it('should add the right order', (done:DoneFn) => {
    service.addOrder(ORDER_MOCK);
    service.ordersSubject$.subscribe((ordersList: Order[]) => {
      expect(ordersList[0]).toEqual(ORDER_MOCK);
      done();
    });
  });

  it('should refresh the bill after add new order', (done:DoneFn) => {
    service.addOrder(ORDER_MOCK);
    service.billSubject$.subscribe((newBill: Bill) => {
      expect(newBill).toEqual(Bill_MOCK);
      done();
    });
  });
});
