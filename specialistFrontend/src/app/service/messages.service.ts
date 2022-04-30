import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Messages } from '../messages';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  

  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:8096';

  getMessages(doc_id: string,spec_id: string) 
  {
    var doctor_id = parseInt(doc_id);
    var specialist_id = parseInt(spec_id);
    return this.http.get<any[]>(`${this.baseUrl}/specialist/getMessages/${doctor_id}/${specialist_id}`,{responseType : 'json'});
  }


  public sendMessage(messageToBeSent:Messages,spec_id:any,doc_id:any)
  {
    
    var doctor_id = parseInt(doc_id);
    var specialist_id = parseInt(spec_id);
    return this.http.post<any>(`${this.baseUrl}/specialist/postMessage/${specialist_id}/${doctor_id}`,messageToBeSent);
  }
}
