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
      this.userUpdateData = undefined;
      // console.log(this.userData)
    },
  (error)=>{
    console.log(error);
  });
  }

  deleteUser(userId: number){
    // console.log('appcomponent', userId);
    if(confirm(`are you sure to delete ${userId}?`)){
      this.crudService.deleteUserData(userId).subscribe((data:any)=>{
        if(data.status == false){
          alert(data.message);
        }
        this.userUpdateData = undefined;
        this.getAllData();
      },(err)=>{
        console.log(err);
      })
    }
  }

  getFormData(value :any){
    // console.log(value);
    this.crudService.addUserData(value).subscribe((data: any)=>{
      if(data.status == false) alert(data.message);      
      this.userUpdateData = undefined;
      this.getAllData();
    }, (err)=>{
      console.log(err);
    })
  }

  userUpdateData : any;
  updateUser(userId: number){
    this.crudService.getUser(userId).subscribe((data: any)=>{
      if(data ==false) alert(data.message);
      this.userUpdateData = data;
    },err=>{console.log(err)});
  }

  setUpdatedUser(value: any){
    this.crudService.updateUserData(value.userId, value).subscribe((data:any)=>{
      // console.log(data);
      if(data.status == true){
        alert(data.message);
      }else{
        alert(data.message)
      }
      this.userUpdateData = undefined;
      this.getAllData();
    }, err=> console.log(err));
  }

}
