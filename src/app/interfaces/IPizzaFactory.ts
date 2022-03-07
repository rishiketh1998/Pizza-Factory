export interface IPizzaFactory {
    factoryRunning: boolean;
    pizzaBakedList: string[];
    pizzaToBeBaked: number;
    pizzaInterval(intervalTime: number): Promise<void>;
    startFactory(): Promise<void>;
}
