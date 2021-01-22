import { Polluant } from "./polluant";
import { Weather } from "./weather";

export class City{
    id?: number;
    dateAdd : Date;
    cityName : string;
    inseeCode : number;
    population : number;
    state : string;
    department : string;
    weathers : Weather[];
    polluants :  Polluant[]
    longitude: number;
    latitude: number;
}