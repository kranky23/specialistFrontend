import { Component, OnInit } from '@angular/core';
import {SpecialistLoginService} from "../service/specialist-login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-specialist-login',
  templateUrl: './specialist-login.component.html',
  styleUrls: ['./specialist-login.component.css']
})
export class SpecialistLoginComponent implements OnInit {

  constructor(private specialistLoginService : SpecialistLoginService, private router: Router) { }

  credentials={
    email:"",
    password:""
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("form is submitted")
    if((this.credentials.email!='' && this.credentials.password!='') &&
      (this.credentials.email!=null && this.credentials.password!=null)){
      this.specialistLoginService.generateToken(this.credentials).subscribe(
        (response:any)=>{
          //success
          console.log(response.fname)
          this.specialistLoginService.loginUser(response);
          this.router.navigate(['/specialist-view', response.id])
        },
        error=>{
          console.log(error);
          alert("Wrong credentials!");
        }
      )
    }
    else{
      console.log("Fields are empty");
    }
  }

}
