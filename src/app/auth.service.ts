import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn(){
    // if (localStorage.getItem("id") === null){
    //   return false;
    // }
    // else{
    //   return true;
    // }
    let ans = (localStorage.getItem("id") === null)?false:true;
    return ans;
  }
  removeVal(){
    localStorage.removeItem("id") 
    localStorage.removeItem("name") 
    localStorage.removeItem("mobile") 
    localStorage.removeItem("status") 
    localStorage.removeItem("email") 
  }
  setVal(obj){
    localStorage.setItem("id" , obj.id) 
    localStorage.setItem("name" , obj.name) 
    localStorage.setItem("mobile" , obj.mobile) 
    localStorage.setItem("status",obj.status) 
    localStorage.setItem("email",obj.email) 
  
  }
 
  getUserData(userval){
    let ans = (localStorage.getItem(userval)===null)?false:(localStorage.getItem(userval));
    return ans;
  }
}
