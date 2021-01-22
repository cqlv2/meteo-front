export class Weather{
    id: number;
    dateAdd: Date;
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