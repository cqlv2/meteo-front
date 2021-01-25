export class Weather{
    id: number;
    dateAdd: Date;
    icone:string;
    label:string;
    description:string;
    temp: number;
    tempMax: number;
    tempMin: number;
    windDirection: number;
    windSpeed: number;
    humidity: number;
    pressure: number;

    constructor(params:any) {
        Object.assign(this, params);
    }
}