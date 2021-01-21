
export class Comment{

    contain: string;
    liked: number;
    comments: Comment[];

    constructor(params:any) {
        Object.assign(this, params);
    }

}