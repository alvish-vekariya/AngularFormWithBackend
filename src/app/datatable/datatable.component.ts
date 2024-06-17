import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { ActionsComponent } from './actions/actions.component';
import { AddressComponent } from './address/address.component';

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
      cellRenderer: ActionsComponent,
      cellRendererParams: {
        deleteFunction: (userId: number) => {
          this.deleteUser(userId);
        },
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
}
