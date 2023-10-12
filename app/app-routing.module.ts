import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { TopicsComponent } from './topics/topics.component';

const routes: Routes = [
  { path : '', component:WelcomeComponent},
  { path : 'about', component:AboutComponent},
  { path : 'topics', component:TopicsComponent},
  { path : 'login', component:LoginComponent},
  { path : 'signup', component:SignupComponent},
  { path : 'home', component:HomeComponent},  
  { path : '**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
