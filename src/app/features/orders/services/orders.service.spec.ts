import {TestBed} from '@angular/core/testing';

import {OrdersService} from './orders.service';
import {Order} from "../models/Order";
import {TAX_FOR_BOOKS} from "../../../utils/consts";
import {orderMock, TOTAL_MOCK, TOTAL_TAX_AMOUNT_MOCK} from "../../../utils/mocks";

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
    expect(OrdersService.getTaxPercent(orderMock.type,)).toEqual(TAX_FOR_BOOKS);
  });

  it('should calculate pttc of the order', () => {
    expect(OrdersService.calculatePTTC(
      orderMock.pht,
      orderMock.type,
      orderMock.isImported,
      orderMock.amount
    )).toEqual(orderMock.pttc);
  });

  it('should add new order', (done:DoneFn) => {
    service.add(orderMock);
    service.ordersSubject$.subscribe((ordersList: Order[]) => {
      expect(ordersList.length).toEqual(1);
      done();
    });
  });

  it('should refresh tax amount after add new order', (done:DoneFn) => {
    service.add(orderMock);
    service.taxAmounts$.subscribe((newTaxAmount: number) => {
      expect(newTaxAmount).toEqual(TOTAL_TAX_AMOUNT_MOCK);
      done();
    });
  });

  it('should refresh total after add new order', (done:DoneFn) => {
    service.add(orderMock);
    service.total$.subscribe((newTotal: number) => {
      expect(newTotal).toEqual(TOTAL_MOCK);
      done();
    });
  });
});
