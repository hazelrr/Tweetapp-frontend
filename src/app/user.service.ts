import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';  
import {HttpHeaders} from '@angular/common/http';  
import { from, Observable, of, Subject } from 'rxjs';  
import { Register } from "../app/register";  
import { Tweet } from './tweet';
import {ViewTweetsComponent} from './view-tweets/view-tweets.component';
import { query } from '@angular/animations';
import { Router } from '@angular/router';
import { Login } from './login';
import { Resetuser } from './resetuser';
import { Viewuser } from './viewuser';
import { Viewtweet } from './viewtweet';
import { Iuser } from './iuser';
import { IPosttweet } from './iposttweet';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  Url : string;
  readonly rootUrl = 'http://localhost:6002/api/';  
 // token : string;  
  header : any; 
  activeUser?:Register;
  loggedIn: Subject<boolean> = new Subject<boolean>();
  userId?:any;
  constructor(private http : HttpClient,private router:Router) {   
  
    this.Url = 'http://localhost:50391/api/';  
  
    const headerSettings: {[name: string]: string | string[]; } = {};  
    this.header = new HttpHeaders(headerSettings);  
  }  
  Login(user : Login){  
   // debugger;  
     //var a =this.Url+'login';
     this.loggedIn.next(true);
     const body :Login =user;
     const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
     return this.http.post<Iuser>(this.rootUrl+'User/'+'Login',body,httpOptions);  
     
  //  return this.http.post<any>(this.Url+'Login',model,{ headers: this.header});  
  }  
   CreateUser(register:Register)  
   {  
     const body:Register =register;
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
    return this.http.post<Register>(this.rootUrl + 'User/' +'Register', body,httpOptions);  
   } 
   ViewAllTweets()
   {
     var a=this.Url+ 'ViewAllTweets';
     return this.http.get<Tweet[]>(this.rootUrl + 'Tweet/'+ 'ViewAllTweets',{responseType:"json"})
   }

   ViewUsers()
   {     
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
    return this.http.get<Viewuser[]>(this.rootUrl + 'User/'+ 'GetAllUsers',{responseType:"json"})
   }

   PostTweets(tweet:IPosttweet)
   {     
     var a=this.Url+ 'PostTweet';
     const body:IPosttweet=tweet;
     const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'accept':'application/json'}) };  
     return this.http.post<IPosttweet>(this.rootUrl + 'Tweet/' + 'PostTweet', body,httpOptions);
   }

   ResetPassword(user:Resetuser)
   {
     var a =this.Url + 'ResetPassword';
     const body :Resetuser =user;
     const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
     return this.http.post(this.rootUrl + 'User/' + 'ResetPassword', body, {responseType:"text"}) 
   }   

   ViewTweetsByUser(userid:string)
   {   
     
     const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
    let params = new HttpParams().set("userId",userid);
    return this.http.get<Viewtweet[]>(this.rootUrl + 'Tweet/' + 'GetAllTweetByUserId/' +userid, {responseType:"json"}) 
   }
   

   getUserbyEmailId(emailId:string){
    const headers = new HttpHeaders({
    'Content-Type': 'application/json'
  })
    return this.http.get(this.rootUrl+'GetUserbyEmailAddress/'+emailId,{ headers: headers }).
    subscribe(result=>{this.activeUser = result as Register
      ,this.router.navigate(['/dashboard'])})
  }

   get isLoggedIn() {
     //this.http.login()
    this.userId = sessionStorage.getItem('loggedUserId');
    console.log(this.userId);
    //this.isLoggedIn= !(this.isLoggedIn);
     if(this.userId !== '')
     {
      return this.loggedIn.asObservable();
     }
     else 
     {    
     return of(false);
     
     
     
     }

    
}

logout() {
  this.loggedIn.next(false);
  sessionStorage.removeItem('loggedUser');
  sessionStorage.removeItem('loggedUserId');
  sessionStorage.clear();  
  this.router.navigate(['/login']);

}

private handleError(error: Response) {
  console.error(error);
  return Observable.throw(error.json() || 'Server error');
  
}
}
