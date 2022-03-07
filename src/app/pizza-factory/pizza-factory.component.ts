import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Random } from '../helper/random';
import { IPizza } from '../interfaces/IPizza';
import { IPizzaFactory } from '../interfaces/IPizzaFactory';
import { Pizza } from '../pizza/pizza';

@Component({
  selector: 'app-pizzafactory',
  templateUrl: './pizza-factory.component.html',
  styleUrls: ['./pizza-factory.component.scss']
})

export class PizzaFactoryComponent implements IPizzaFactory {
  factoryRunning = false;
  pizzaBakedList: string[] = [];
  pizzaToBeBaked: number = environment.pizzaCount;
  constructor() {

  }

  /**
   * @description: sets an interval between pizzas being cooked
   * @param intervalTime: number - interval time between each pizza being baked
   * @returns - Prmoise<void>
   */
  async pizzaInterval(intervalTime: number): Promise<void> {
    return new Promise<void>((res) => {
      setTimeout(() => {
        res();
      }, intervalTime);
    });
  }

  /**
   * @description: starts baking a fixed number of pizza with random base
   * and random topping. It then stores the baked pizza in the
   * list which is displayed on the UI.
   */
  async startFactory(): Promise<void> {
    let pizza: IPizza;
    let randomBase: string;
    let randomTopping: string;
    const random = new Random();
    this.factoryRunning = true;
    while (this.pizzaBakedList.length !== environment.pizzaCount) {
      randomBase = random.randomObjKeyValue(environment.pizzaBases);
      randomTopping = random.randomArrValue(environment.pizzaToppings);
      pizza = new Pizza(randomBase, randomTopping, environment.pizzaBaseTime, environment.pizzaBases);
      const cookedPizza = await pizza.startBaking();
      this.pizzaBakedList.push(cookedPizza);
      this.pizzaToBeBaked -= 1;
      await this.pizzaInterval(environment.pizzaCookingIntervalTime);
    }
    this.factoryRunning = false;
  }
}
