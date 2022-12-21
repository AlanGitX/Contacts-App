import { Component, OnInit } from '@angular/core';
import { Mycontact } from 'src/models/myContact';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css'],
})
export class ContactManagerComponent implements OnInit {
  Thecontacts: Mycontact[] = [];
  NameSearch: string = '';
  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.getContact();
  }
  getContact(){
    this.api.allcontacts().subscribe((data: any) => {
      // console.log(data);
      this.Thecontacts = data;
    });
  }
  search(event: any) {
    this.NameSearch = event.target.value;
  }
  deleteContact(contactID: any){
    this.api.deleteContact(contactID).subscribe((data:any)=>{
      this.getContact();
    })
  }
}
