import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrderComponent } from './add-order.component';
import {By} from "@angular/platform-browser";
import {newOrderFormMock} from "../../../../utils/mocks";
import {ReactiveFormsModule} from "@angular/forms";
import {NewOrderForm} from "../../models/newOrderForm";

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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit new form output', () => {
    spyOn(component.newOrderEvent, 'emit');
    component.addForm.patchValue(newOrderFormMock);
    component.onAddNewOrder();
    fixture.detectChanges();
    expect(component.newOrderEvent.emit).toHaveBeenCalledWith(newOrderFormMock);
  });

  it('should clear form after submit', () => {
    const productNameElement: HTMLInputElement = fixture.debugElement.query(By.css("#product_name")).nativeElement;
    component.addForm.patchValue(newOrderFormMock);
    component.onAddNewOrder();
    expect(productNameElement.value).toEqual('');
  });
});
