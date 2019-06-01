import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserNote } from './UserNote';
import { ConfigurationService } from '@shared/services/configuration.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private ServerWithApiUrl;
  private Endpoint;

  constructor(private http:HttpClient,private configuration: ConfigurationService) {
    this.ServerWithApiUrl=this.configuration.ServerWithApiUrl;
    this.Endpoint = this.ServerWithApiUrl + `services/app/NotesService`;
   }

  getAllNotes(userEmail){
  //return this.http.get('http://localhost:21021/api/services/app/NotesService/GetAllNotes?useremail='+userEmail);
  return this.http.get(`${this.Endpoint}/GetAllNotes?useremail=${userEmail}`);
  }
  

  createNote(userNote:UserNote){
    var body = JSON.stringify(userNote);
    console.log(body);
    let headers={
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
  }
  //return this.http.post('http://localhost:21021/api/services/app/NotesService/CreateNote',body, headers);
  return this.http.post(`${this.Endpoint}/CreateNote`,body, headers);
  
  
  }
}
