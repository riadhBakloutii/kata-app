import {Order} from "../features/orders/models/Order";
import {ProductTypesEnum} from "../features/orders/models/ProductTypesEnum";
import {NewOrderForm} from "../features/orders/models/newOrderForm";

export const ORDER_MOCK: Order = {
  amount: 2,
  name: 'Harry Potter book',
  isImported: true,
  type: ProductTypesEnum.BOOK,
  pttc: 230,
  pht: 100,
}
export const TOTAL_MOCK = 230;
export const TOTAL_TAX_AMOUNT_MOCK = 30;

export const NEW_ORDER_FORM_MOCK: NewOrderForm = {
  amount: 2,
  productName: 'Harry Potter book',
  productType: ProductTypesEnum.BOOK,
  productPrice: 100,
  isImported: true,
};

export const INIT_NEW_ORDER_FORM_MOCK = {
  amount: null,
  productName: '',
  productType: null,
  productPrice: null,
  isImported: null,
};

export const Bill_MOCK = {
  orders: [ORDER_MOCK],
  taxAmount: 30,
  total: 230,
};

export const NUMBER_TO_BE_ROUNDED: number = 1.03;
export const ROUNDED_NUMBER: number = 1.05;
