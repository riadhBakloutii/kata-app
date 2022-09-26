import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrderComponent } from './add-order.component';
import {INIT_NEW_ORDER_FORM_MOCK, NEW_ORDER_FORM_MOCK} from "../../../../utils/mocks";
import {ReactiveFormsModule} from "@angular/forms";

describe('AddOrderComponent', () => {
  let component: AddOrderComponent;
  let fixture: ComponentFixture<AddOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrderComponent ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component instance', () => {
    expect(component).toBeTruthy();
  });

  it('should emit new form output', () => {
    spyOn(component.newOrderEvent, 'emit');
    component.addForm.patchValue(NEW_ORDER_FORM_MOCK);
    component.onAddNewOrder();
    fixture.detectChanges();
    expect(component.newOrderEvent.emit).toHaveBeenCalledWith(NEW_ORDER_FORM_MOCK);
  });

  it('should reset the form after submit', () => {
    spyOn(component.addForm, 'reset');
    component.addForm.patchValue(NEW_ORDER_FORM_MOCK);
    component.onAddNewOrder();
    fixture.detectChanges();
    expect(component.addForm.reset).toHaveBeenCalled();
  });

  it('should change the form submission state', () => {
    component.addForm.patchValue(NEW_ORDER_FORM_MOCK);
    component.onAddNewOrder();
    fixture.detectChanges();
    expect(component.isSubmitted).toBeFalsy();
  });

  it('should init the form', () => {
    component.initFrom();
    fixture.detectChanges();
    expect(component.addForm.value).toEqual(INIT_NEW_ORDER_FORM_MOCK);
  });
});
