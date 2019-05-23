
import { Component, OnInit, Injector, HostListener } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { UserNote } from './UserNote';
import { NotesService } from './notes.service';
import { SubSink } from 'subsink';//RxJS subscription sink for unsubscribing gracefully in a component

@Component({
  selector: 'my-notes',
  templateUrl: './my-notes.component.html',
  styleUrls: ['./my-notes.component.css']
})
export class MyNotesComponent extends AppComponentBase implements OnInit{

  loginUser;
  userNote:UserNote={userEmail:"",notes:""};
  currentnote;
  allnotes$;
  allnotes:string[];

  private subs = new SubSink();//for more subs in future
    constructor( injector: Injector, private notesService:NotesService) {
        super(injector);
    }

    ngOnInit() {
        this.loginUser = this.appSession.user;
        this.loadNotes();
        let unsavedNote = localStorage.getItem('unsavedNote');
        if(unsavedNote) {
          this.currentnote=unsavedNote;
        }
    }

    loadNotes(){
      this.allnotes$=this.notesService.getAllNotes(this.loginUser.emailAddress);
        this.allnotes$.subscribe(res=>this.allnotes=res.result.items);
    }

    save(notes){
      console.log(notes);
       this.userNote.userEmail=this.loginUser.emailAddress;
       this.userNote.notes=notes.notes;
       console.log(this.userNote);
       this.subs.add(this.notesService.createNote(this.userNote)
       .subscribe(res => {
         console.log('res', res);
         this.loadNotes();
        }));
      //call to server will happen only on subscribe
      this.currentnote="";
       localStorage.removeItem('unsavedNote');//on save remove from local storage
    }

    ngOnDestroy(){
      //while moving to other component without saving the notes, save notes in localstorage
      if(this.currentnote && this.currentnote!=""){
        localStorage.setItem('unsavedNote', this.currentnote);
      }
      this.subs.unsubscribe();
    }

    @HostListener('window:beforeunload') onBeforeUnload() {
      if (this.currentnote && this.currentnote != "") {
        localStorage.setItem('unsavedNote', this.currentnote);
      }
    }

}
