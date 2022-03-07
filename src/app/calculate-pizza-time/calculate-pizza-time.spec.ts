import { ICalculatePizzaTime } from '../interfaces/ICalculatePizzaTime';
import { CalculatePizzaTime } from '../calculate-pizza-time/calculate-pizza-time';

describe('CalculatePizzaTimeClass', () => {

    let pizza: ICalculatePizzaTime;

    beforeEach(() => {
        pizza = new CalculatePizzaTime('Deep Pan', 'Vegetable', 3000, {
            'Deep Pan': 2,
            'Stuffed Crust': 1.5,
            'Thin and Crispy': 1
        });
    });

    describe('verifies totalBaseTime method', () => {

        it('should verify totalBaseTime is doubled when pizzaBase is set to Deep Pan', () => {
            const expectedBaseTime = 6000;
            expect(pizza.totalBaseTime()).toEqual(expectedBaseTime);
        });

        it('should verify totalBaseTime remains the same when pizzaBase is set to Thin and Crispy', () => {
            pizza.pizzaBase = 'Thin and Crispy';
            const expectedBaseTime = 3000;
            expect(pizza.totalBaseTime()).toEqual(expectedBaseTime);
        });

        it('should verify totalBaseTime is multiplied 1.5 times when pizzaBase is set to Stuffed Crust', () => {
            pizza.pizzaBase = 'Stuffed Crust';
            const expectedBaseTime = 4500;
            expect(pizza.totalBaseTime()).toEqual(expectedBaseTime);
        });
    });

    describe('verifies totalToppingTime method', () => {
        it('should verify totalToppingTime returns the right value when topping is set to Vegetable', () => {
            const expectedVegetableToppingTime = 900;
            expect(pizza.totalToppingTime()).toEqual(expectedVegetableToppingTime);
        });

        it('should verify totalToppingTime returns the right value when topping is set to Ham and Mushroom', () => {
            pizza.pizzaTopping = 'Ham and Mushroom';
            const expectedVegetableToppingTime = 1600;
            expect(pizza.totalToppingTime()).toEqual(expectedVegetableToppingTime);
        });

        it('should verify totalToppingTime returns the right value when topping is set to Pepperoni', () => {
            pizza.pizzaTopping = 'Pepperoni';
            const expectedVegetableToppingTime = 900;
            expect(pizza.totalToppingTime()).toEqual(expectedVegetableToppingTime);
        });
    });

    describe('verifies totalPizzaTime method', () => {
        it('should verify totalPizzaTime when value is set to Deep Pan and topping is set to Vegetable', () => {
            const expectedPizzaTime = 6900;
            expect(pizza.totalPizzaTime()).toEqual(expectedPizzaTime);
        });

        it('should verify totalPizzaTime when value is set to Thin and Crispy and topping is set to Ham and Mushroom', () => {
            pizza.pizzaTopping = 'Ham and Mushroom';
            pizza.pizzaBase = 'Thin and Crispy';
            const expectedVegetableToppingTime = 4600;
            expect(pizza.totalPizzaTime()).toEqual(expectedVegetableToppingTime);
        });

        it('should verify totalPizzaTime when value is set to Stuffed Crust and topping is set to Pepperoni', () => {
            pizza.pizzaBase = 'Stuffed Crust';
            pizza.pizzaTopping = 'Pepperoni';
            const expectedVegetableToppingTime = 5400;
            expect(pizza.totalPizzaTime()).toEqual(expectedVegetableToppingTime);
        });
    });

});
