import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sendsms',
  templateUrl: './sendsms.component.html',
  styleUrls: ['./sendsms.component.css']
})
export class SendsmsComponent implements OnInit {
  private allgroup:any;
  private allcontact:any;
  public alllibrary:any;
  public allmessage:any
  constructor(private crud:CrudService,private auth:AuthService) { }

  ngOnInit() {
    // show groups
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
    // show groups

    //show lib
      ///
    this.crud.select("library").subscribe(
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
        this.alllibrary = finalarr;
      }
    )
    //show lib
  }
  filter_message(id){
    this.crud.select("message").subscribe(
      (res)=>{
        
        let finalarr = []
        for(let key in res){
          if(res[key]['libid']==id){
            finalarr.push(res[key])
          }
        }
        // console.log(finalarr);
        this.allmessage = finalarr;
      }
    )
  }

  filter_contact(id){
    //get all contacts
    this.crud.select("contact").subscribe(
      (res)=>{
        
        let finalarr = []
        for(let key in res){
          if(res[key]['grpid']==id){
            finalarr.push(res[key])
          }
        }
        // console.log(finalarr);
        this.allcontact = finalarr;
      }
    )
    //get all contacts
  }
  get_contact_details(email,mobile,username){
    // alert(email)
    // alert(mobile)
    document.getElementById("mobileid").value = mobile
    document.getElementById("emailid").value = email
    document.getElementById("nameid").value = username
  }
  get_message_details(title){
    document.getElementById("messageid").value = title
  }
}
