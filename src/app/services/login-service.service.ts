import { Injectable } from '@angular/core';

@Injectable()
export class LoginServiceService {

  constructor() { }

  LoginUser(userId: string, password: string): boolean {
    //Dummy user with userId and password as admin
    let _userId = "admin";
    let _password = "admin";
    if (userId == _userId && password == _password)
      return true;
    return false;
  }

  LogOut():void {
    
  }

}
