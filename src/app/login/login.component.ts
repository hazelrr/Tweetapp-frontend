import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';    
import { UserService } from '../user.service';    
 import { Form, FormsModule } from '@angular/forms';  
import { Login } from '../login';
import { state } from '@angular/animations';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
 
})

export class LoginComponent implements OnInit {
 
  model:any={};   
  user?:Login;  
  errorMessage:string | undefined;    
  constructor(private router:Router,private UserService:UserService) { }    
  
 
  ngOnInit() {    
    // sessionStorage.removeItem('EmailId');    
    // sessionStorage.clear();    
  }    
  
  login(){    
    //debugger;    
    this.UserService.Login(this.model).subscribe(    
      data => {    
        // debugger; 
        if(data)
        {
          console.log(data);
          sessionStorage.setItem('loggedUser', data.emailAddress);
          sessionStorage.setItem('loggedUserId',data.userId.toString());
          this.UserService.getUserbyEmailId(data.emailAddress);
          console.log(this.UserService.activeUser?.userId);
          console.log(data.emailAddress);
          this.router.navigate(['dashboard']);
        } 
        else{
          this.errorMessage = data;
        }  
         
      },    
      error => {    
        this.UserService.loggedIn.next(false);           
        this.errorMessage ="Incorrect username/password. Please try again.."
        
      });    
  };
 

}
