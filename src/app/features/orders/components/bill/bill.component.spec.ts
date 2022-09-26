import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillComponent } from './bill.component';
import {OrdersService} from "../../services/orders.service";
import {orderMock, TOTAL_MOCK, TOTAL_TAX_AMOUNT_MOCK} from "../../../../utils/mocks";
import {By} from "@angular/platform-browser";
import {DebugElement} from "@angular/core";

describe('BillComponent', () => {
  let component: BillComponent;
  let fixture: ComponentFixture<BillComponent>;
  let taxAmountElement: HTMLElement
  let totalAmountElement: HTMLElement

  const TAX_DESCRIPTION = 'Montant des taxes : ';
  const TOTAL_DESCRIPTION = 'Total : ';

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
    taxAmountElement = fixture.debugElement.query(By.css("#tax_amount")).nativeElement;
    totalAmountElement = fixture.debugElement.query(By.css("#total_amount")).nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display tax amount', (done: DoneFn) => {
    const orderService = fixture.debugElement.injector.get(OrdersService);
    orderService.add(orderMock);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(taxAmountElement.textContent).toEqual( TAX_DESCRIPTION + TOTAL_TAX_AMOUNT_MOCK);
      done();
    });
  });

  it('should display total amount', (done: DoneFn) => {
    const orderService = fixture.debugElement.injector.get(OrdersService);
    orderService.add(orderMock);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(totalAmountElement.textContent).toEqual(TOTAL_DESCRIPTION + TOTAL_MOCK);
      done();
    });
  });
});
