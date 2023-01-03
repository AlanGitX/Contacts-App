import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mycontact } from 'src/models/myContact';
import { Mygroup } from 'src/models/Mygroup';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit{
  contactId:string='';
  groups:Mygroup[]=[] as Mygroup[];
  contact:Mycontact={} as Mycontact;
  constructor(private activateroute:ActivatedRoute, private api:ApiService ,private router:Router ){}
  ngOnInit(): void {
    this.activateroute.params.subscribe((data:any)=>{
      console.log(data);
      
      this.contactId = data['contactID']
      console.log(this.contactId);

      
    })
    this.api.viewContact(this.contactId).subscribe((data:any)=>{
      this.contact=data;
      console.log(this.contact);
      
    }
    )
    this.api.getAllGroups().subscribe((event:any)=>{
      this.groups=event
      console.log(this.groups);
      
    })
  }
  updateContact(){
    this.api.updateContact(this.contactId,this.contact).subscribe((data:any)=>{
      console.log(data);
      
      this.router.navigateByUrl('')

    })
  }

}
