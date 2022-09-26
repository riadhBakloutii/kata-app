import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrdersListComponent } from './orders-list.component';
import {NEW_ORDER_FORM_MOCK, ORDER_MOCK} from "../../../../utils/mocks";
import {mapOrderFromForm} from "../../mappers/orderMapper";
import {Router} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {OrdersService} from "../../services/orders.service";
import {APP_ROUTES} from "../../../../common/app-routes";

describe('OrdersListComponent', () => {
  let component: OrdersListComponent;
  let fixture: ComponentFixture<OrdersListComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersListComponent ],
      imports: [RouterTestingModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersListComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create the component instance', () => {
    expect(component).toBeTruthy();
  });

  // TODO to be moved to separate utils testing file.
  it('should create new order from order object', () => {
    expect(mapOrderFromForm(NEW_ORDER_FORM_MOCK)).toEqual(ORDER_MOCK);
  });

  it('should call orderService.addOrder', (done:DoneFn) => {
    const orderService: OrdersService = fixture.debugElement.injector.get(OrdersService);
    spyOn(orderService, 'addOrder');
    component.onAddNewOrder(NEW_ORDER_FORM_MOCK);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(orderService.addOrder).toHaveBeenCalledWith(ORDER_MOCK);
      done();
    });
  });

  it('should call router.navigate methode with bill component route', () => {
    spyOn(router, 'navigate');
    component.generateBill();
    expect(router.navigate).toHaveBeenCalledWith([APP_ROUTES.bill]);
  });

});
