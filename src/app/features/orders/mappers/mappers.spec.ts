import {mapOrderFromForm} from "./orderMapper";
import {NEW_ORDER_FORM_MOCK, ORDER_MOCK} from "../../../utils/mocks";

describe('mappers', () => {
    it('should map NewOrderForm object to Order ojbect', () => {
        expect(mapOrderFromForm(NEW_ORDER_FORM_MOCK)).toEqual(ORDER_MOCK);
    });
})
