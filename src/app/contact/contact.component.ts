import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public allgroup:any;

  public message:any;
  constructor(private crud:CrudService,private auth:AuthService) { }

  ngOnInit() {
    this.crud.select("group").subscribe(
      (res)=>{
        // console.log(res);
        let userid = this.auth.getUserData("id")
        // console.log(userid)
        let finalarr = []
        for(let key in res){
          if(res[key]['byid']==userid){
            finalarr.push(res[key])
          }
        }
        // console.log(finalarr);
        this.allgroup = finalarr;
      }
    )
    

    /////
  }

  add_contact(id,name,mobile,email){
    console.log(id.value)
    console.log(name.value)
    console.log(mobile.value)
    console.log(email.value)

    var obj = {
      title:name.value,
      contact:mobile.value,
      email:email.value,
      grpid:id.value
    }

    this.crud.insert("contact",obj).subscribe(
      (res)=>{
        this.message = "Contact Added";
      }
    )

  }

}
