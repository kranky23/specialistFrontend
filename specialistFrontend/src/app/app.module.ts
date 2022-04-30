import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpecialistLoginComponent } from './specialist-login/specialist-login.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeaderComponent } from './header/header.component';
import { SpecialistViewComponent } from './specialist-view/specialist-view.component';
import { DoctorViewComponent } from './doctor-view/doctor-view.component';
import { PatientResponseComponent } from './patient-response/patient-response.component';
import {FormsModule} from "@angular/forms";
import { DoctorMessageComponent } from './doctor-message/doctor-message.component';

@NgModule({
  declarations: [
    AppComponent,
    SpecialistLoginComponent,
    SideBarComponent,
    HeaderComponent,
    SpecialistViewComponent,
    DoctorViewComponent,
    PatientResponseComponent,
    DoctorMessageComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
