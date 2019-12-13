import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators,FormControl}  from '@angular/forms';
import { CrudService } from '../crud.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm:FormGroup
  public message:string;
  constructor(private frm:FormBuilder,private crud:CrudService,private auth:AuthService,private router:Router) { }

  ngOnInit() {
    this.loginForm = this.frm.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(4),Validators.maxLength(12)]]
    })
  }

  Postdata(form){
    // console.log(form.value)
    let email = form.value.email
    let password = form.value.password

    this.crud.select("users").subscribe(
      (response)=>{
        let count=0;
        var arr_local = {}
        for(let key in response){

          if(response[key]['email']==email && response[key]['password']==password){
            console.log(response[key])
            arr_local['name'] = response[key]['name']
            arr_local['email'] = response[key]['email']
            arr_local['id'] = response[key]['id']
            arr_local['mobile'] = response[key]['mobile']
            arr_local['status'] = response[key]['status']
            count++;
          }
        }

        if(count>0){
          // this.message = "ok"
          // console.log(arr_local)
          this.auth.setVal(arr_local)
          this.router.navigate(['/'])
        }
        else{
          this.message = "Invalid Login Details"
        }
      }
    )

  }

}
