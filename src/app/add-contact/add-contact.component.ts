import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mycontact } from 'src/models/myContact';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  allGroups:any[]=[];
  ContactName:string=''
  contact:Mycontact = {} as Mycontact;
  constructor(private api:ApiService, private router:Router){

  }
  ngOnInit(): void {
    this.api.getAllGroups().subscribe((event:any)=>{
      this.allGroups=event;
    })
  }
  addContact(){
    this.api.addContact(this.contact).subscribe((event:any)=>{
      this.router.navigateByUrl('')
    })

  }

}
