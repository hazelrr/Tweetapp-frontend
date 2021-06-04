import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { BehaviorSubject,Observable } from 'rxjs';
import { AuthserviceService } from './authservice.service';
import { Register } from './register';
import { UserService } from './user.service';
import {fader, slider} from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    fader,
    slider

  ]
})
export class AppComponent {
  login:boolean=false;
  isLoggedIn?: Observable<boolean>;
  userDisplayName?: string | null;
  userid:any;

  prepareRoute(outlet:RouterOutlet)
  {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.isLoggedIn = this.userService.isLoggedIn;
    this.userid = sessionStorage.getItem('loggedUserId');
    
      this.isLoggedIn = this.userService.isLoggedIn; 
    
    this.userDisplayName = sessionStorage.getItem('loggedUser');
    console.log(this.userDisplayName);
   
  }

  onLogout() {
    sessionStorage.removeItem('loggedUser');
    sessionStorage.removeItem('loggedUserId');
    sessionStorage.clear();
    this.userService.logout();
    alert("See you next time!!");
   
  }
}
