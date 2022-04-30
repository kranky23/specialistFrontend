import { Component, OnInit } from '@angular/core';
import {DataService} from "../service/data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {doctor} from "../models/doctor.model";
import {patient} from "../models/patient.model";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-doctor-view',
  templateUrl: './doctor-view.component.html',
  styleUrls: ['./doctor-view.component.css']
})
export class DoctorViewComponent implements OnInit {
  patientData: patient[] | undefined;
  permissionText : string = '';
  constructor(private data: DataService,
              private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  onMessagePatient() {
    this.router.navigate(['/doctor-message', this.route.snapshot.params['did']])
  }

  getAllPatient(){
    this.data.getAllPatient(this.route.snapshot.params['did'], localStorage.getItem("specialistId")||'')
      .pipe(map(value => {
        //password is used for readreceit
        let data = value.map((data:any) => {
          return { id: data.id, count: data.count, fname: data.fname, lname: data.lname ? data.lname : '' }
        })
        return data;
      }))
      .subscribe(
        data => {
          this.patientData = data
          console.log("data password is "+data[0].count)
          if (this.patientData)
            console.log("password is "+this.patientData[0].count)
        },
        err => {
          console.log(err)
        }
      )
  }

  viewPatientData(pid: string){
    this.router.navigate(['/patient-response', pid])
  }

  askPermission(pid: string){
    this.permissionText = ""
    this.data.askPermission(localStorage.getItem("specialistId")||'', pid)
      .subscribe(
        (response:any)=>{
            this.permissionText = response.resString;
            console.log(response.resString);
            setTimeout(()=>{                           //<<<---using ()=> syntax
            this.permissionText = "";
            }, 5000);
        },
        error=>{
          this.permissionText = error.resString;
          console.log(error.resString);
          setTimeout(()=>{                           //<<<---using ()=> syntax
            this.permissionText = "";
          }, 5000);
        }
      )
  }



}
