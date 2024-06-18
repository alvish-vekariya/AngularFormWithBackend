import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { ActionsComponent } from './actions/actions.component';
import { AddressComponent } from './address/address.component';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
})
export class DatatableComponent {
  @Input() tableData: any;
  @Output() deleteUserEvent = new EventEmitter();

  colDefs: ColDef[] = [
    {
      field: 'userId',
      flex: 1.5,
      resizable: false,
      filter: 'agNumberColumnFilter',
      suppressMovable: true,
    },
    { field: 'username', flex: 2, resizable: false, suppressMovable: true },
    { field: 'email', flex: 2, resizable: false, suppressMovable: true },
    { field: 'addresses', flex: 2, resizable: false, suppressMovable: true, cellRenderer: AddressComponent},
    {
      field: 'actions',
      flex: 2,
      resizable: false,
      suppressMovable: true,
      filter : false,
      cellRenderer: ActionsComponent,
      cellRendererParams: {
        deleteFunction: (userId: number) => {
          this.deleteUser(userId);
        },
        updateFunction: (userId: number)=>{
          this.updateUser(userId);
        }
      },
    },
  ];

  defaultCols: ColDef = {
    filter: 'agTextColumnFilter',
    floatingFilter: true,
  };

  deleteUser(userId: number) {
    // console.log('alvish');
    // console.log(userId);
    this.deleteUserEvent.emit(userId);
    // this.tableData = JSON.parse(localStorage.getItem('userformData') as string);
  }

  @Output() updateUserEvent = new EventEmitter();
  updateUser(userId: number) {
    // console.log(userId);
    this.updateUserEvent.emit(userId);
  }
}
