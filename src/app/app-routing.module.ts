import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummaryComponent } from './summary/summary.component';
import { UsersComponent } from './users/users.component';
import { CarrierComponent } from './carrier/carrier.component';
import { CarComponent } from './car/car.component';
import { CustomComponent } from './custom/custom.component';
import { InspectorComponent } from './inspector/inspector.component';
import { OperationComponent } from './operation/operation.component';
import { OpedetailComponent } from './opedetail/opedetail.component';
import { ReportComponent } from './report/report.component';
import { PhotoComponent } from './photo/photo.component';


const routes: Routes = [
  { path: 'summary', component: SummaryComponent },
  { path: '', component: SummaryComponent  },
  { path: 'users', component: UsersComponent },
  { path: 'carrier', component: CarrierComponent },
  { path: 'car', component: CarComponent },
  { path: 'custom', component: CustomComponent },
  { path: 'inspector', component: InspectorComponent },
  { path: 'operation', component: OperationComponent },
  { path: 'opedetail', component: OpedetailComponent }, 
  { path: 'report', component: ReportComponent },
  { path: 'photo', component: PhotoComponent }

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
