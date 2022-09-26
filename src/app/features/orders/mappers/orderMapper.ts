import {OrdersService} from "../services/orders.service";
import {NewOrderForm} from "../models/newOrderForm";
import {Order} from "../models/Order";

export const mapOrderFromForm = (newOrderForm: NewOrderForm): Order => {
  return {
    amount: newOrderForm.amount ,
    name: newOrderForm.productName,
    type: newOrderForm.productType,
    pht: newOrderForm.productPrice,
    pttc: OrdersService.calculatePTTC(
      newOrderForm.productPrice,
      newOrderForm.productType,
      newOrderForm.isImported,
      newOrderForm.amount,
    ),
    isImported: newOrderForm.isImported,
  }
}
