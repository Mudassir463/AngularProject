import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public for_login:boolean = true;
  public for_password:boolean = false;
  constructor(private auth:AuthService) { }

  ngOnInit() {
    if(this.auth.isLoggedIn()){
      this.for_login = false;
      this.for_password = true;
    }
  }

}
