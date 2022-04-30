import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { BehaviorSubject, Observable, Subject, Subscriber } from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  subject  = new Subject<string>()
  private patientIdSubject: BehaviorSubject<string> = new BehaviorSubject<string>('0');
  public pid: Observable<string> = this.patientIdSubject.asObservable()

  constructor(private http: HttpClient) {  }

  getDoctorData(spec_id: string){
    return this.http.get<any>(`${environment.url}/specialist/doctorList/${spec_id}`)
  }

  getAllPatient(doc_id: string, spec_id: string){
    return this.http.get<any>(`${environment.url}/specialist/patientlistbyDoctor/${doc_id}/${spec_id}`)
  }

  askPermission(spec_id: string, pat_id: string){
    return this.http.get<any>(`${environment.url}/specialist/askPermision/${spec_id}/${pat_id}`)
  }

  getQuestionBySectionId(id: string) {
    return this.http.get<any>(`${environment.url}/specialist/doctor/response/questions/${id}`)
  }

  getResponseBySectionId(s_id: string, p_id: string) {
    return this.http.get<any>(`${environment.url}/specialist/doctor/response/${s_id}/${p_id}`)
  }

  getOrderService(p_id: string){
    return this.http.get<any> (`${environment.url}/specialist/doctor/response/${p_id}/getOrderSet`)
  }

  getSectionProgress(p_id: string) {
    return this.http.get<any>(`${environment.url}/specialist/doctor/dashboard/${p_id}/progress`)
  }
}
