import { CalculatePizzaTime } from '../calculate-pizza-time/calculate-pizza-time';
import { IPizza } from '../interfaces/IPizza';

export class Pizza extends CalculatePizzaTime implements IPizza {
    pizzaBaked = false;
    constructor(pizzaBase: string, pizzaTopping: string, pizzaBaseTime: number, pizzaBases: object) {
        super(pizzaBase, pizzaTopping, pizzaBaseTime, pizzaBases);
    }

    /**
     * @description: Bakes a pizza depending on the time required for it to bake and returns a message
     * containing what's baked.
     * @returns: Promise<string> - bakedPizzaMessage
     */
    startBaking(): Promise<string> {
        const bakedPizzaMessage = `${this.pizzaBase} Base with ${this.pizzaTopping} Topping Pizza.`;
        return new Promise((res) => {
            setTimeout(() => {
                this.pizzaBaked = true;
                return res(bakedPizzaMessage);
            }, this.totalPizzaTime());
        });
    }
}
