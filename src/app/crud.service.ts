import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private url = "http://localhost:3000/"
  constructor(private http:HttpClient) { }

  select(column){
    return this.http.get(this.url+column)
  }
  insert(column,rec){
    return this.http.post(this.url+column,rec)
  }

}
