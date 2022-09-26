import {kataRound} from "./utils";
import {NUMBER_TO_BE_ROUNDED, ROUNDED_NUMBER} from "./mocks";

describe('utils', () => {
    it('should return the rounder number with five cents up', () => {
        expect(kataRound(NUMBER_TO_BE_ROUNDED)).toEqual(ROUNDED_NUMBER);
    });
})
