import { Comment } from 'src/app/models/comment';

export class Answer{

    contain: string;
    liked: number;
    comments: Comment[];

    constructor(params:any) {
        Object.assign(this, params);
    }
}