import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private appService: AppService) { }

  contacts;

  showInner: boolean = false;
  ngOnInit() {
    this.contacts = this.appService.getContacts();

    this.contacts.filter(c => c.contacts).map(c => c.show = false);

  }

  showInnerContact(contact) {
    if (contact.contacts) {
      contact.contacts.map(c => c.show = !c.show)
    }
  }
  showInInnerContact(contact) {
    if (contact.contacts) {
      this.showInner = !this.showInner;
      contact.contacts.map(c => c.show = this.showInner)
    }
  }
}