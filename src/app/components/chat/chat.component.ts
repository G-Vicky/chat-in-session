import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  public message: String = '';
  public sessionid: String = '123352';

  constructor() {}

  sendMessage() {
    console.log('Sending message!: ' + this.message);
    this.message = '';
  }

  ngOnInit(): void {}
}
