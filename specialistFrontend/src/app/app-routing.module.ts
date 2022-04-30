import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SpecialistLoginComponent} from "./specialist-login/specialist-login.component";
import {SpecialistViewComponent} from "./specialist-view/specialist-view.component";
import {DoctorViewComponent} from "./doctor-view/doctor-view.component";
import {PatientResponseComponent} from "./patient-response/patient-response.component";
import {DoctorMessageComponent} from "./doctor-message/doctor-message.component";

const routes: Routes = [
  {
    path:'',
    component: SpecialistLoginComponent
  },
  {path: 'specialist-view/:id', component: SpecialistViewComponent},
  { path: 'doctor-view/:did', component: DoctorViewComponent},
  { path: 'patient-response/:pid', component: PatientResponseComponent},
  { path: 'doctor-message/:did', component: DoctorMessageComponent},
  // { path: 'patient-message/:pid', component: PatientMessageComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
