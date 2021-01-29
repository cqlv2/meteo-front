import { Answer } from "./answer";

export class Subject {

    id?:number;
    dateAdd?:Date;
    label:string;
    answers?:Answer[];
    memberId?: number;
    memberLastName?:string;
    memberFirstName?:string;



    constructor(params:any) {
        Object.assign(this, params);
    }
}