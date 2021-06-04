import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Register } from '../register';
import { Tweet } from '../tweet';
import { UserService } from '../user.service';
import { Viewtweet } from '../viewtweet';
import { Viewuser } from '../viewuser';

@Component({
  selector: 'app-viewusertweets',
  templateUrl: './viewusertweets.component.html',
  styleUrls: ['./viewusertweets.component.css']
})
export class ViewusertweetsComponent implements OnInit {
  tweetsList?:Viewtweet[];
  userid?:any;
  firstName?:string;
  lastName?:string;
  users?:Viewuser[];
  user?:Viewuser;

  constructor(private service:UserService ,private router:Router,private route:ActivatedRoute) {
    this.userid =this.route.snapshot.params.id
   }

  ngOnInit(){
   
    
    this.service.ViewTweetsByUser(this.userid).subscribe((response) =>
     {
        this.tweetsList = response;
        
     });

    
     this.service.ViewUsers().subscribe((res) => {
      this.users = res;
      this.user =this.users.find(x =>x.userId == this.userid)
      this.firstName =this.user?.firstName;
      this.lastName= this.user?.lastName;
  });
    

     



  }


}
