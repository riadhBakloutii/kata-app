import {Order} from "./Order";

export interface Bill {
    orders: Order[];
    taxAmount: number;
    total: number;
}