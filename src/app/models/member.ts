import { Favorite } from "./favorite";
import { Role } from "./role";
import { Topic } from "./topic";

export class Member {
  id?: number;
  dateAdd: Date;
  lastName: string;
  firstName: string;
  userName: string;
  email: string;
  role: Role;
  favorites: Favorite[];
  topics: Topic[];

  constructor(params: any) {    
    Object.assign(this, params);
  }

  estAnonyme(): boolean {
    return this.email === undefined;
  }

}