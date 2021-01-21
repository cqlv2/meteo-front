import { Subject } from "./subject";

export class Topic{
    id:number;
    dateAdd:Date;
    label:string;
    subjects:Subject[];

    constructor(params:any) {
        Object.assign(this, params);
    }
}