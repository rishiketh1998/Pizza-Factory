export interface IRandom {
    randomNumber(length: number): number;
    randomObjKeyValue(obj: object): any;
    randomArrValue(arr: any[]): any;
}
