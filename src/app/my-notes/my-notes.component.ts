
import { Component, OnInit, Injector, ViewEncapsulation } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { AppAuthService } from '@shared/auth/app-auth.service';

@Component({
  selector: 'my-notes',
  templateUrl: './my-notes.component.html',
  styleUrls: ['./my-notes.component.css']
})
export class MyNotesComponent extends AppComponentBase implements OnInit{

  loginUser = '';

    constructor( injector: Injector) {
        super(injector);
    }

    ngOnInit() {
        this.loginUser = this.appSession.user.emailAddress;
    }

}
