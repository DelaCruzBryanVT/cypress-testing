import { UserInterface } from './user-model-interface';

export class UserClass implements UserInterface {
  user = "root";
  password = "root";

  constructor(user: string, password:string){
      this.user = user;
      this.password = password;
  }
}