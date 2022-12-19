import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  allGroups:any[]=[];
  ContactName:string=''
  constructor(private api:ApiService){

  }
  ngOnInit(): void {
    this.api.getAllGroups().subscribe((event:any)=>{
      this.allGroups=event;
    })
  }
  addContact(){

  }

}
