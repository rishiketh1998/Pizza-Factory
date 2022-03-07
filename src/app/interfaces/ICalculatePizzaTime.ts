export interface ICalculatePizzaTime {
    pizzaBase: string;
    pizzaTopping: string;
    pizzaBaseTime: number;
    totalBaseTime(): number;
    totalToppingTime(): number;
    totalPizzaTime(): number;
}
