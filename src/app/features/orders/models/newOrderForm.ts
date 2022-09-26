import {ProductTypesEnum} from "./ProductTypesEnum";

export interface NewOrderForm {
  amount: number;
  productName: string;
  productType: ProductTypesEnum;
  productPrice: number;
  isImported: boolean;
}
