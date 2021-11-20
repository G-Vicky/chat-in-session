import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
import MessageModel from '../models/message';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  username: String;
  constructor(private db: AngularFireDatabase) {
    this.username = localStorage.getItem('username') || 'Friend';
  }

  getMessages(sessionId: String): AngularFireList<MessageModel> {
    return this.db.list(`chat/${sessionId}/messages`);
  }

  public sendMessage(sessionId: String, messageText: String) {
    const newMessage = new MessageModel(
      new Date().getTime(),
      this.username,
      messageText
    );
    return this.db.list(`chat/${sessionId}/messages`).push(newMessage);
  }
}
