
import { Component, OnInit, Injector } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { UserNote } from './UserNote';
import { NotesService } from './notes.service';

@Component({
  selector: 'my-notes',
  templateUrl: './my-notes.component.html',
  styleUrls: ['./my-notes.component.css']
})
export class MyNotesComponent extends AppComponentBase implements OnInit{

  loginUser;
  userNote:UserNote={userEmail:"",notes:""};
  sub;
    constructor( injector: Injector, private notesService:NotesService) {
        super(injector);
    }

    ngOnInit() {
        this.loginUser = this.appSession.user;
    }

    save(notes){
      console.log(notes);
       this.userNote.userEmail=this.loginUser.emailAddress;
       this.userNote.notes=notes.notes;
       console.log(this.userNote);
      this.sub = this.notesService.createNote(this.userNote).subscribe(res => {console.log('res', res) });
      //call to server will happen only on subscribe
    }

    ngOnDestroy(){
     this.sub.unsubscibe();
    }

}
