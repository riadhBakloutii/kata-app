import {ProductTypesEnum} from "./ProductTypesEnum";

export interface Order {
  amount: number;
  name: string;
  isImported: boolean;
  type: ProductTypesEnum;
  pttc: number;
  pht: number;
}
