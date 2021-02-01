export class MemberQuery {
    id?: number;
    dateAdd?: Date;
    lastName: string;
    firstName: string;
    userName: string;
    email: string;
    password: string;
    roleId?: number =2;
    favoritesId?: number[];
    topicId?: number[];
}