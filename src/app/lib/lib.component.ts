import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators,FormControl}  from '@angular/forms';
import { CrudService } from '../crud.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-lib',
  templateUrl: './lib.component.html',
  styleUrls: ['./lib.component.css']
})
export class LibComponent implements OnInit {
  public loginForm:FormGroup
  public message:string;
  constructor(private frm:FormBuilder,private crud:CrudService,private auth:AuthService) { }

  ngOnInit() {
    this.loginForm = this.frm.group({
      title:['',[Validators.required,Validators.pattern(/^[a-zA-Z0-9]{4,12}$/)]]
    })
  }

  Postdata(form){
    // console.log(form.value);
    let userid = this.auth.getUserData("id")
    // console.log(userid)

    let obj = {title:form.value.title , byid:userid}
    this.crud.insert("library",obj).subscribe(
      (res)=>{
        this.message = "Library Added"
      }
    )
  }

}
