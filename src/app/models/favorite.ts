import { City } from "./city";

export class Favorite {
    id?: number;//": 1,
    dateAdd?: Date;//":  : number;//"2021-01-16T15:44:04 : number;//",
    showWeather: boolean;//": false,
    showPolluants: boolean;//": false,
    polluants: string[] = [];//": [],
    infoWeather: string[] = [];//": [],
    cityDtoResponse?: City;//": {
    villeId?: number;
    memberId: number;

    constructor(params: any) {
        Object.assign(this, params);
    }
}