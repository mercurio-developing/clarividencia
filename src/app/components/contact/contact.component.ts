import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ContactService } from './contact.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ ContactService]
})
export class ContactComponent implements OnInit {
  

  submitted;

  constructor(private contactService:ContactService) {}

  onSubmit(dataEmail) {
    this.submitted = true;
    this.contactService.sendEmail(dataEmail)
  }

  ngOnInit(){

  }

}
