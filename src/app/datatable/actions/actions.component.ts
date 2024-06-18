import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements ICellRendererAngularComp {
  params : any; 
  agInit(params: ICellRendererParams<any, any, any>): void {
    this.params = params;
  }
  
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return true;
  }

  deleteMe(){
    // console.log(this.params.data.addresses);
    // let userData = JSON.parse(localStorage.getItem('userformData') as string);
    // userData.forEach((ele:any, index:number) => {
    //   if(this.params.data.userId == ele.userId){
    //     userData.splice(index,1);
    //   }
    // });
    // localStorage.setItem('userformData', JSON.stringify(userData));
    this.params.deleteFunction(this.params.data.userId);
  }

  updateMe(){
    this.params.updateFunction(this.params.data.userId);
  }
  
}
