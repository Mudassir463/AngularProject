import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PasswordComponent } from './password/password.component';
import { LogoutComponent } from './logout/logout.component';
import { LibComponent } from './lib/lib.component';
import { GroupComponent } from './group/group.component';
import { MessageComponent } from './message/message.component';
import { ContactComponent } from './contact/contact.component';
import { MydirDirective } from './mydir.directive';

import {ReactiveFormsModule,FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { SendsmsComponent } from './sendsms/sendsms.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    PasswordComponent,
    LogoutComponent,
    LibComponent,
    GroupComponent,
    MessageComponent,
    ContactComponent,
    MydirDirective,
    SendsmsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
