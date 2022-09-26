import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersListComponent } from './orders-list.component';
import {newOrderFormMock, orderMock} from "../../../../utils/mocks";
import {mapOrderFromForm} from "../../mappers/orderMapper";
import {By} from "@angular/platform-browser";

describe('OrdersListComponent', () => {
  let component: OrdersListComponent;
  let fixture: ComponentFixture<OrdersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create new order from order form object', () => {
    expect(mapOrderFromForm(newOrderFormMock)).toEqual(orderMock);
  });

  it('should display the new order', () => {
    component.onAddNewOrder(newOrderFormMock);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      let displayElement: HTMLElement = fixture.debugElement.query(By.css('.order-item')).nativeElement;
      expect(displayElement.textContent).toEqual(' 2 Harry Potter book importé à €100.00 ')
    });
    expect(mapOrderFromForm(newOrderFormMock)).toEqual(orderMock);
  });
});
