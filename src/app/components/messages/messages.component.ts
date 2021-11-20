import { Component, Input, OnInit, ViewChild } from '@angular/core';
import MessageModel from 'src/app/models/message';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  @Input() messages: MessageModel[] = [];

  constructor() {}

  getTime(timestamp: Number) {
    return new Date(+timestamp).toLocaleTimeString('en-US', {
      hour12: true,
      hour: 'numeric',
      minute: 'numeric',
    });
  }

  scrollDown() {
    // const element = document.getElementById('box');
    // element.scrollIntoView({
    //   behavior: 'smooth',
    //   block: 'end',
    //   inline: 'nearest',
    // });
  }

  ngOnInit(): void {}
}
