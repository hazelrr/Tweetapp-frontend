import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from '../register';
import { Tweet } from '../tweet';
import { UserService } from '../user.service';
import { Viewtweet } from '../viewtweet';
import { Viewuser } from '../viewuser';

@Component({
  selector: 'app-viewusers',
  templateUrl: './viewusers.component.html',
  styleUrls: ['./viewusers.component.css']
})
export class ViewusersComponent implements OnInit {
  data:any;
  firstName? :string;
  LastName? :string;
  emailAddress?:string;
  userId?:string;
  users?:Viewuser[];
  userTweet?:Tweet;
  userid?:any;
  tweetsList?:Viewtweet[];

  constructor(private service:UserService,private router:Router) { }

  ngOnInit() {
    this.service.ViewUsers().subscribe(
      (response) => { 
      console.log('response received')     
      this.users = response;
      console.log(this.users)
      });
  } 


}
