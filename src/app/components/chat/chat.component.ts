import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import MessageModel from 'src/app/models/message';
import { Clipboard } from '@angular/cdk/clipboard';

import { MessageService } from 'src/app/services/message.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  public sessionId: String = 'sessionid1';
  public messageText: String = '';
  public loading: boolean;

  messages: MessageModel[] = [];

  constructor(
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router,
    private clipboard: Clipboard,
    private toastService: ToastrService
  ) {
    this.loading = true;
  }

  sendMessage() {
    console.log('sending msg!!');
    this.messageText = this.messageText.trim();
    if (this.messageText)
      this.messageService.sendMessage(this.sessionId, this.messageText);
    this.messageText = '';
  }

  getAllMessages() {
    this.messageService
      .getMessages(this.sessionId)
      .valueChanges()
      .subscribe((data) => {
        if (data.length > 0) {
          this.messages = data;
          this.loading = false;
        } else this.router.navigateByUrl('invalid');
      });
  }

  cpyToClipBoard() {
    this.clipboard.copy(this.sessionId + '');
    this.toastService.success('copied to clipboard');
  }

  ngOnInit(): void {
    this.loading = true;
    if (localStorage.getItem('username') === null)
      this.router.navigateByUrl('invalid');
    this.route.params.subscribe((data) => {
      this.sessionId = data.session;
      if (localStorage.getItem('sessionId') !== this.sessionId)
        this.router.navigateByUrl('invalid');
    });
    this.getAllMessages();
  }
}
