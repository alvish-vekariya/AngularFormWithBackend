import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CrudService } from './crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Second-Task-Dynamic-Form';

  constructor(private http : HttpClient, private crudService: CrudService){}

  userData:any =[];

  ngOnInit(): void {
    // this.manageLocalStorage();
    this.getAllData();
  }

  manageLocalStorage(){
    if(localStorage.getItem('userformData')){
      this.userData = JSON.parse(localStorage.getItem('userformData') as string);
    }else{
      this.userData = [];
    }
  }

  removeAlert(msg : string){
    console.log(msg);
  }

  addAlert(msg : string){
    console.log(msg);
  }

  getAllData(){
    this.crudService.getUserData().subscribe(data=>{
      // const data = this.crudService.userData;
      // console.log(data);
      this.userData = data;
      // console.log(this.userData)
    },
  (error)=>{
    console.log(error);
  });
  }

  deleteUser(userId: number){
    // console.log('appcomponent', userId);
    this.crudService.deleteUserData(userId).subscribe(data=>{
      console.log(data);
      this.getAllData();
    },(err)=>{
      console.log(err);
    })
  }

  getFormData(value :any){
    // console.log(value);
    this.crudService.addUserData(value).subscribe(data=>{
      // console.log(data);
      this.getAllData();
    }, (err)=>{
      console.log(err);
    })


    // this.manageLocalStorage();
    // localStorage.clear();
    // this.userData = [...this.userData,value];
    // localStorage.setItem('userformData', JSON.stringify(this.userData));
  }
}
