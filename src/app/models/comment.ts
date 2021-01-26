import { Answer } from "./answer";

export class Comment{

    id ?: number;
    dateAdd?: Date;
    contain: string;
    liked?: number;
    originId?: number;
    comments?: Comment[];

    constructor(params:any) {
        Object.assign(this, params);
    }

}