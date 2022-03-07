import { IRandom } from '../interfaces/IRandom';

export class Random implements IRandom {

    constructor() {

    }

    /**
     * @description: between 0 to length a random number is picked
     * @param length: number
     * @returns: number
     */
    randomNumber(length: number): number {
        return Math.floor(Math.random() * length);
    }

    /**
     * @description: return a ranom key value of an object
     * @param obj: object
     * @returns: a random key value
     */
    randomObjKeyValue(obj): any {
        const keys = Object.keys(obj);
        return keys[this.randomNumber(keys.length)];
    }

    /**
     * @description: returns a random array value
     * @param arr: array
     * @returns: a random arr value
     */
    randomArrValue(arr): any {
        return arr[this.randomNumber(arr.length)];
    }
}
