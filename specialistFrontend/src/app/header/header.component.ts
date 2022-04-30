import { Component, OnInit } from '@angular/core';
import {specialistInitial} from "../models/specialistInitial.model";
import {SpecialistLoginService} from "../service/specialist-login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  specialistName: specialistInitial | undefined
  constructor(
    private loginService: SpecialistLoginService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.loginService.getSpecialist().subscribe(
      (value: specialistInitial) => {
        this.specialistName = value
      },
      err => {
        console.log(err)
      }
    )
  }
  logout() {
    this.loginService.setnulltoken()
    this.loginService.logout();
    this.router.navigate(['/'])
  }
}
