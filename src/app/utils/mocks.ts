import {Order} from "../features/orders/models/Order";
import {ProductTypesEnum} from "../features/orders/models/ProductTypesEnum";
import {NewOrderForm} from "../features/orders/models/newOrderForm";

export const orderMock: Order = {
  amount: 2,
  name: 'Harry Potter book',
  isImported: true,
  type: ProductTypesEnum.BOOK,
  pttc: 230,
  pht: 100,
}
export const TOTAL_MOCK = 230;
export const TOTAL_TAX_AMOUNT_MOCK = 30;

export const newOrderFormMock: NewOrderForm = {
  amount: 2,
  productName: 'Harry Potter book',
  productType: ProductTypesEnum.BOOK,
  productPrice: 100,
  isImported: true,
}
