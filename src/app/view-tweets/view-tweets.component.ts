import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tweet } from '../tweet';
import { UserService } from '../user.service';

@Component({
  selector: 'app-view-tweets',
  templateUrl: './view-tweets.component.html',
  styleUrls: ['./view-tweets.component.css']
})
export class ViewTweetsComponent implements OnInit {

  tweet?:Tweet[];
  user?:any;
  userid?:string;

  constructor(private service:UserService, private router:Router) { }

  ngOnInit() {
    this.service.ViewAllTweets().subscribe((response) =>
    {
       this.tweet =response;
       console.log(this.tweet)
    });
  }
 

}
