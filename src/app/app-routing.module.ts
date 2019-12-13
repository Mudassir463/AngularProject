import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LibComponent } from './lib/lib.component';
import { GroupComponent } from './group/group.component';
import { MessageComponent } from './message/message.component';
import { ContactComponent } from './contact/contact.component';
import { LogoutComponent } from './logout/logout.component';
import { PasswordComponent } from './password/password.component';
import { Guard1Guard } from './guard1.guard';
import { Guard2Guard } from './guard2.guard';
import { SendsmsComponent } from './sendsms/sendsms.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"register",component:RegisterComponent,canActivate:[Guard1Guard]},
  {path:"login",component:LoginComponent,canActivate:[Guard1Guard]},
  {path:"lib",component:LibComponent,canActivate:[Guard2Guard]},
  {path:"group",component:GroupComponent,canActivate:[Guard2Guard]},
  {path:"message",component:MessageComponent,canActivate:[Guard2Guard]},
  {path:"contact",component:ContactComponent,canActivate:[Guard2Guard]},
  {path:"password",component:PasswordComponent,canActivate:[Guard2Guard]},
  {path:"logout",component:LogoutComponent,canActivate:[Guard2Guard]},
  {path:"sendsms",component:SendsmsComponent,canActivate:[Guard2Guard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
