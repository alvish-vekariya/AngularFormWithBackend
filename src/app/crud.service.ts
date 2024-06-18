import { Injectable } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  constructor(private http: HttpClient){}

  userData: any;
  private url: string = "http://localhost:3000/user/";


  getUserData(){
    return this.http.get(this.url+"getAllUser");
  }

  deleteUserData(userId: number){
    return this.http.delete(this.url+ `deleteUser?userId=${userId}`);
  }

  addUserData(value: any){
    return this.http.post(this.url + "addUser", value);
  }

  updateUserData(value: any){
    return this.http.post(this.url+ `updateUser`, value);
  }

  getUser(userId: number){
    return this.http.get(this.url + `getUser?userId=${userId}`);
  }
}
