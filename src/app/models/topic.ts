import { Subject } from "./subject";

export class Topic{
    id?:number;
    dateAdd?:Date;
    label:string;
    subjects:Subject[];
    
    memberId?: number;
    memberLastName?:string;
    memberFirstName?:string;


    constructor(params:any) {
        Object.assign(this, params);
    }
}