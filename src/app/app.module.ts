import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsermanagerComponent } from './usermanager/usermanager.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DatatableComponent } from './datatable/datatable.component';
import { AgGridAngular } from 'ag-grid-angular';
import { ActionsComponent } from './datatable/actions/actions.component';
import { HttpClientModule } from '@angular/common/http';
import { AddressComponent } from './datatable/address/address.component';

@NgModule({
  declarations: [
    AppComponent,
    UsermanagerComponent,
    DatatableComponent,
    ActionsComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
    AgGridAngular,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
