import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';    
import {Register} from '../register';    
import {Observable} from 'rxjs';  
import { first } from 'rxjs/operators';  
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordMatch} from '../validator/password-match.validator';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  registerForm: any;
  loading = false;
  submitted = false;
  data = false;    
   
  message?:string;  
  error: any;
  errorMessage?:string;
  

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,      
      private userService: UserService
  ) {
     
  }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          loginId: ['', Validators.required],          
          password: ['', [Validators.required, Validators.minLength(6),Validators.pattern]],
          confirmPassword: ['', Validators.required],
          emailAddress:['',[Validators.required,Validators.email]],
          contactNo:['', [Validators.required]]
      },
          {
            validator: PasswordMatch('password', 'confirmPassword')
          
        
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
    
   onFormSubmit()    
  {   
    this.submitted = true;

          // stop here if form is invalid
          if (this.registerForm.invalid) {
              return;
          }
    
          this.loading = true; 
    const user = this.registerForm.value;    
    this.Createemployee(user);    
  }    
  Createemployee(register:Register)    
  {    
  this.userService.CreateUser(register).subscribe(    
    ()=>    
    {    
      this.data = true;    
      this.message = 'Data saved Successfully';    
      this.registerForm.reset(); 
      alert('SUCCESS!! Your registration is complete:-)\n\n' + JSON.stringify(this.registerForm.value))  
      this.router.navigate(['login'])
    },
    error => {
                          this.errorMessage = error;
                          this.loading = false;                         
                         alert("You already have an account. Please Login");
            });    
      
}    

}
