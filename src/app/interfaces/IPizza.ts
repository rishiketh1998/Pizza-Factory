export interface IPizza {
    pizzaBase: string;
    pizzaTopping: string;
    pizzaBaseTime: number;
    pizzaBases: object;
    pizzaBaked: boolean;
    startBaking(): Promise<string>;
}
