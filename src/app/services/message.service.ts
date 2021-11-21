import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
import { Router } from '@angular/router';
import MessageModel from '../models/message';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  username: String = '';
  constructor(private db: AngularFireDatabase, private router: Router) {}

  getMessages(sessionId: String): AngularFireList<MessageModel> {
    return this.db.list(`chat/${sessionId}/messages`);
  }

  public sendMessage(sessionId: String, messageText: String) {
    if (!localStorage.getItem('sessionId'))
      this.router.navigateByUrl(`home/invalid`);
    this.username = localStorage.getItem('username') || 'Friend';
    const newMessage = new MessageModel(
      new Date().getTime(),
      this.username,
      messageText
    );
    return this.db.list(`chat/${sessionId}/messages`).push(newMessage);
  }
}
