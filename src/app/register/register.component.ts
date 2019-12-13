import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,FormControl } from '@angular/forms';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm:FormGroup
  public message:string;
 constructor(private frm:FormBuilder,private crud:CrudService) { }

  ngOnInit() {
    this.registerForm = this.frm.group({
      username:['',[Validators.required,Validators.minLength(4),Validators.maxLength(12)]],
      number:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(4),Validators.maxLength(12)]]
    })
  }

  Postdata(form){
    console.log(form.value)
    var rec = {
      name:form.value.username,
      mobile:form.value.number,
      email:form.value.email,
      password:form.value.password,
      status:0
    }
    this.crud.insert("users",rec).subscribe(
      (response)=>{
        console.log(response)
        this.message = "User Added";
      }
    )
  }

}
