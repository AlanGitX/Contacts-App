import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mycontact } from 'src/models/myContact';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl:string = 'http://localhost:3000/contacts'
  groupUrl:string='http://localhost:3000/groups'
//dependency injection
  constructor(private http:HttpClient) { 
    //create an API call for allcontacts
    
  }
  allcontacts():Observable<Mycontact>{
   return this.http.get(this.baseUrl)
  }
//function to view particuar contact. 

  viewContact(contactId:string){
    return this.http.get(`${this.baseUrl}/${contactId}`)
  }
  groupcontact(group:any){
    return this.http.get(`${this.groupUrl}/${group}`)

  }
  getAllGroups(){
    return this.http.get(`${this.groupUrl}`)
  }
  addContact(contactBody:any){
   return this.http.post(this.baseUrl,contactBody)
  }

  deleteContact(contactID:any){
    return this.http.delete(`${this.baseUrl}/${contactID}`)

  }
  updateContact(contactID:any, contactBody:any){
    return this.http.put(`${this.baseUrl}/${contactID}`,contactBody)

  }
}








