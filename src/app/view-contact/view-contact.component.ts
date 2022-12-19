import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {
  ContactId = '';
  contact :any;
  group:any;
  groupName:any
  constructor(private activatedRoute:ActivatedRoute,private api:ApiService){

  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data:any)=>{
      this.ContactId = data.contactID;
  
      

    })
    this.api.viewContact(this.ContactId).subscribe((data:any)=>{
      this.contact = data;
      this.group=data.groupId;
      this.api.groupcontact(this.group).subscribe((data:any)=>{
        this.groupName=data;
        console.log(data);
        
          })

      
      
    })
   

  }
  

}
