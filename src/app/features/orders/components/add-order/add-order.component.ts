import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {OrdersService} from "../../services/orders.service";
import {ProductTypesEnum} from "../../models/ProductTypesEnum";
import {NewOrderForm} from "../../models/newOrderForm";

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent {

  readonly addForm: FormGroup = this.initFrom();
  productTypes: ProductTypesEnum[] = Object.values(ProductTypesEnum);

  @Output()
  newOrderEvent = new EventEmitter<NewOrderForm>();

  isSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
  ) {
  }

  initFrom(): FormGroup {
    return this.formBuilder.group({
      // form controls names are strings to avoid their change in the minifying process for optimization by angular.
      'amount': [null, Validators.required],
      'productName': ['', Validators.required],
      'productType': [null, Validators.required],
      'productPrice': [null, Validators.required],
      'isImported': [null],
    });
  }

  onAddNewOrder(): void {
    if (this.addForm.valid) {
      this.newOrderEvent.emit(this.addForm.value as NewOrderForm);
      this.addForm.reset()
      this.isSubmitted = false;
    } else {
      this.isSubmitted = true;
    }
  }
}
