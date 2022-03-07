import { IPizza } from '../interfaces/IPizza';
import { Pizza } from './pizza';

describe('PizzaClass', () => {

    let pizza: IPizza;

    beforeEach(() => {
        pizza = new Pizza('Deep Pan', 'Vegetable', 3000, {
            'Deep Pan': 2,
            'Stuffed Crust': 1.5,
            'Thin and Crispy': 1
        });
    });

    describe('verifies startBaking method', () => {

        it('should verify by default pizzaBaked property is set to false before the method is called', () => {
            expect(pizza.pizzaBaked).toEqual(false);
        });

        it('should verify pizzaBaked property is set to true when method is called', () => {
            jasmine.clock().install();
            pizza.startBaking();
            jasmine.clock().tick(6900);
            expect(pizza.pizzaBaked).toEqual(true);
            jasmine.clock().uninstall();
        });

        it('should return the expected value when base is set Deep Pan and topping is set to vegetable', async () => {
            jasmine.clock().install();
            const res = pizza.startBaking();
            jasmine.clock().tick(6900);
            const expectedValue = 'Deep Pan Base with Vegetable Topping Pizza.';
            await expectAsync(res).toBeResolvedTo(expectedValue);
            jasmine.clock().uninstall();
        });

        it('should return the expected value when base is set Deep Pan and topping is set to Pepperoni', async () => {
            jasmine.clock().install();
            pizza.pizzaBase = 'Thin and Crispy';
            pizza.pizzaTopping = 'Pepperoni';
            const res = pizza.startBaking();
            jasmine.clock().tick(6900);
            const expectedValue = 'Thin and Crispy Base with Pepperoni Topping Pizza.';
            await expectAsync(res).toBeResolvedTo(expectedValue);
            jasmine.clock().uninstall();
        });

    });
});
