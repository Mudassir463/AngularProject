import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  public alllib:any;
  public message:any;
  constructor(private crud:CrudService,private auth:AuthService) { }
 

  ngOnInit() {
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
        this.alllib = finalarr;
      }
    )
  }

  add_message(id,msg){
 
    var obj = {
      title:msg.value,
      libid:id.value
    }

    this.crud.insert("message",obj).subscribe(
      (res)=>{
        this.message = "Contact Added";
      }
    )

  }
}
