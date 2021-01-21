import { Answer } from "./answer";

export class Subject {

    id:number;
    dateAdd:Date;
    label:string;
    answers:Answer[];

    constructor(params:any) {
        Object.assign(this, params);
    }
}