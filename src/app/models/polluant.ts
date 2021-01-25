export class Polluant {
    id?: number;
    dateAdd: Date;
    rate:number;
    dominentpol:string;
    no2:number;
    o3:number;
    pm10:number;
    pm25:number;
    constructor(params: any) {    
        Object.assign(this, params);
      }
}