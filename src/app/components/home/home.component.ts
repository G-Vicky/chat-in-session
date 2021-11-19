import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public username: String = '';
  public sessionid: String = '';

  constructor() {}

  createSession() {
    console.log('Creating new sessino for ' + this.username);
  }

  joinSession() {
    console.log(
      'Joining session with ' + this.sessionid + ' for ' + this.username
    );
  }

  ngOnInit(): void {}
}
