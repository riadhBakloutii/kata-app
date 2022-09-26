import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillComponent } from './bill.component';
import {OrdersService} from "../../services/orders.service";
import {Bill_MOCK, ORDER_MOCK, TOTAL_MOCK, TOTAL_TAX_AMOUNT_MOCK} from "../../../../utils/mocks";
import {By} from "@angular/platform-browser";
import {DebugElement} from "@angular/core";
import {Bill} from "../../models/Bill";

describe('BillComponent', () => {
  let component: BillComponent;
  let fixture: ComponentFixture<BillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component instance', () => {
    expect(component).toBeTruthy();
  });

  it('should call window.print() methode', () => {
    spyOn(window, 'print');
    component.printBill();
    expect(window.print).toHaveBeenCalled();
  });

  it('should listed for new order', (done: DoneFn) => {
    const orderService: OrdersService = fixture.debugElement.injector.get(OrdersService);
    orderService.addOrder(ORDER_MOCK);
    fixture.detectChanges();
    component.billSubject$.subscribe((newBill: Bill) => {
      expect(newBill).toEqual(Bill_MOCK);
      done();
    });
  });

});
