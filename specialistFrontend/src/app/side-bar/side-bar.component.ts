import { Component, OnInit } from '@angular/core';
import {SpecialistLoginService} from "../service/specialist-login.service";
import {Router} from "@angular/router";
import {DataService} from "../service/data.service";
import {doctor} from "../models/doctor.model";
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  doctorData: doctor[] | undefined;
  specialistid: string = '';
  constructor(private data: DataService, private router: Router, private loginservice: SpecialistLoginService) { }

  ngOnInit(): void {
    this.loginservice.getSpecialist().subscribe(
      value => {
        this.specialistid = value.id
      },
      err => {
        console.log(err)
      }
    )
    this.data.getDoctorData(this.specialistid )
      .pipe(map(value => {
        //password is used for readreceit
        let data = value.map((data:any) => {
          return { id: data.id, password: data.password, fname: data.fname, lname: data.lname ? data.lname : '' }
        })
        return data;
      }))
      .subscribe(
        data => {
          this.doctorData = data
          console.log("data password is "+data[0].password)
          if (this.doctorData)
            console.log("password is "+this.doctorData[0].password)
        },
        err => {
          console.log(err)
        }
      )


  }

  onGetingDoctorDetails(id: string) {
    // this.data.sendMessage(id)
    this.router.navigate(['/doctor-view', id])
  }
}
