import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';
import { from } from 'rxjs';
import { identifierModuleUrl } from '@angular/compiler';
import { prepareSyntheticPropertyName } from '@angular/compiler/src/render3/util';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { SummaryComponent } from './summary/summary.component';
import { UsersComponent } from './users/users.component';
import { CarrierComponent } from './carrier/carrier.component';
import { CarComponent } from './car/car.component';
import { CustomComponent } from './custom/custom.component';
import { InspectorComponent } from './inspector/inspector.component';
import { OperationComponent } from './operation/operation.component'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

//Material design
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMenuModule} from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule  } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { OpedetailComponent } from './opedetail/opedetail.component';
import { ReportComponent } from './report/report.component';
import { PhotoComponent } from './photo/photo.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SummaryComponent,
    UsersComponent,
    CarrierComponent,
    CarComponent,
    CustomComponent,
    InspectorComponent,
    OperationComponent,
    OpedetailComponent,
    ReportComponent,
    PhotoComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatTabsModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
