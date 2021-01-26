import { Comment } from 'src/app/models/comment';

export class Answer{

    id?: number;
    dateAdd?: Date;
    contain: string;
    liked?: number;
    comments?: Comment[];
    subjectId?: number;
    memberId?: number;


    constructor(params:any) {
        Object.assign(this, params);
    }
}