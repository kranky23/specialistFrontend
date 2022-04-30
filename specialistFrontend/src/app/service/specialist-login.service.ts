import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {specialistInitial} from "../models/specialistInitial.model";

@Injectable({
  providedIn: 'root'
})
export class SpecialistLoginService {

  subject = new BehaviorSubject<any>('Dr. Abc')
  constructor(private http: HttpClient) { }

  //calling the server to generate the token
  generateToken(credentials: any) {
    return this.http.post(`${environment.url}/specialist/login`, credentials)
  }



  //for login
  loginUser(response: specialistInitial) {
    this.subject.next(response)
    // localStorage.setItem("token", response.token)
    localStorage.setItem("specialistId", response.id)
    return true;
  }

  setnulltoken() {
    this.subject.next(null)
  }

  getSpecialist(): Observable<specialistInitial> {
    return this.subject.asObservable()
  }

  isloggedIn() {
    let token = localStorage.getItem("specialistId");
    if (token === undefined || token === '' || token === null) {
      console.log("false")
      return false;
    }
    else {
      console.log("true")
      return true;
    }
  }

  logout() {
    // localStorage.removeItem('token')
    localStorage.removeItem('specialistId')
    return true;
  }

  getToken() {
    // console.log("GET TOKEN ",localStorage.getItem('token'))
    return localStorage.getItem('specialistId');
  }
}
