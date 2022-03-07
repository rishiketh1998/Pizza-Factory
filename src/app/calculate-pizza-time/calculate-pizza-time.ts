import { ICalculatePizzaTime } from '../interfaces/ICalculatePizzaTime';

export class CalculatePizzaTime implements ICalculatePizzaTime {
    pizzaBase: string;
    pizzaTopping: string;
    pizzaBaseTime: number;
    pizzaBases: object;

    constructor(pizzaBase: string, pizzaTopping: string, pizzaBaseTime: number, pizzaBases: object) {
        this.pizzaBase = pizzaBase;
        this.pizzaTopping = pizzaTopping;
        this.pizzaBaseTime = pizzaBaseTime;
        this.pizzaBases = pizzaBases;
    }

    /**
     * @description: takes the baseTime of pizza and multiplies it with selected base multiplier from
     * pizzaBases object.
     * @returns: number
     */
    totalBaseTime(): number {
        return this.pizzaBaseTime * this.pizzaBases[this.pizzaBase];
    }

    /**
     * @description: Based on the topping selected it calculates the toppping time by taking the length
     * of the topping and multiplying it with 100. Each letter 100ms
     * @returns: number
     */
    totalToppingTime(): number {
        let totalTime = 0;
        const timePerToppingLetter = 100;
        totalTime = this.pizzaTopping.length * timePerToppingLetter;
        return totalTime;
    }

    /**
     * @description: calculates the total time to bake pizza by adding totalBaseTime and totalToppingTime.
     * @returns: number
     */
    totalPizzaTime(): number {
        return this.totalBaseTime() + this.totalToppingTime();
    }
}
