import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Register } from '../register';
import { Tweet } from '../tweet';
import {UserService} from "../user.service";
import { Viewtweet } from '../viewtweet';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 
 message:any;
  tweets?: any;
  user?:any;  
  errormessage:any;
  msg:string= 'You have not posted any tweets yet';  
  userDisplayName:any;
  userid:any;
  userid1:any;
  tweetContent:any ={};
  tweetList?:any;
  form:any;
  



  constructor(private service:UserService,private formbuilder:FormBuilder) {
   

   }

  ngOnInit() {
    this.userDisplayName = sessionStorage.getItem('loggedUser');
    this.userid = sessionStorage.getItem('loggedUserId');    
    console.log(this.userDisplayName);
    this.userid1 =this.service.activeUser?.userId;
    console.log(this.userid);

    this.form = this.formbuilder.group({
      tweetMessage: ['', Validators.maxLength(144)]
    });
    
    
    

    this.service.ViewTweetsByUser(this.userid).subscribe((response) =>
    {
       this.tweetList = response;        
       console.log(this.tweetList)
    });
  }
      


posttweet()
{    
  this.tweetContent.userId =this.userid;
  console.log(this.tweetContent.userId);
  console.log(this.tweetContent.tweetMessage);
  console.log(this.tweetContent);
  this.service.PostTweets(this.tweetContent).subscribe( (res) =>
    {
      this.tweets = res;
      console.log(this.tweets);
      alert("Your tweet has been posted");
    });
}


}


