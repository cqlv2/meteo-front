import { Answer } from "./answer";

export class Comment{

    id ?: number;
    dateAdd?: Date;
    contain: string;
    liked?: number;
    originId?: number;
    comments?: Comment[];
    memberId?: number;
    memberLastName?:string;
    memberFirstName?:string;


    constructor(params:any) {
        Object.assign(this, params);
    }

}