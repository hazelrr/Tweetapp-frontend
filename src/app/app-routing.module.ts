import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';    
import { RegisterComponent } from './register/register.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ViewTweetsComponent } from './view-tweets/view-tweets.component';
import { Viewtweet } from './viewtweet';
import { ViewusersComponent } from './viewusers/viewusers.component';
import { ViewusertweetsComponent } from './viewusertweets/viewusertweets.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {    
    path: '',    
    redirectTo: 'welcome', 
       
    pathMatch: 'full',    
  },    
  {    
    path: 'login',    
    component: LoginComponent,    
    data: {    
      title: 'Login Page',
      animation: 'isLeft'   
    }    
  },    
  {
    path: 'register',
    component: RegisterComponent,
    data:
    {
      title: 'Registration Page',
      animation: 'isRight'
    }
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    data:
    {
      title:'Dashboard',
      animation: 'isLeft'
    }
  },
  {
    path:'resetpassword',
    component:ResetpasswordComponent,
    data:
    {
      title:'ResetPassword',
      animation: 'isRight'
    }

  },
  {
    path:'viewusers',
    component:ViewusersComponent,
    data:
    {
      title:'ViewUsers',
      animation: 'isLeft'
    }

  },

  {
    path:'viewusertweets/:id',
    component:ViewusertweetsComponent,
    data:
    {
      title:'ViewUserTweets',
      animation: 'isLeft'
    }

  },

  {
    path:'viewtweets',
    component:ViewTweetsComponent,
    data:
    {
      title:'ViewTweets',
      animation: 'isLeft'
    }

  },
  
  {
    path:'welcome',
    component:WelcomeComponent,
    data:
    {
      title:'welcome',
      animation: 'isLeft'
    }

  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
