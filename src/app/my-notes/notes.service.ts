import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserNote } from './UserNote';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http:HttpClient) { }

  getAllNotes(userEmail){
  return this.http.get('http://localhost:21021/api/services/app/NotesService/GetAllNotes?useremail='+userEmail);
  }
  

  createNote(userNote:UserNote){
    var body = JSON.stringify(userNote);
    console.log(body);
    let headers={
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
  }
  return this.http.post('http://localhost:21021/api/services/app/NotesService/CreateNote',body, headers);
  
  }
}
