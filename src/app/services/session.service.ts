import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
import { Router } from '@angular/router';
import { Observable, pipe } from 'rxjs';
import MessageModel from '../models/message';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor(private db: AngularFireDatabase, private router: Router) {}

  private getWelcomeMessage(username: String, sesssionId: String): String {
    return `Hello! ${username}!😃 Share this ${sesssionId} code with your friends to join in this session. Enjoy peeps!`;
  }

  createNewSession(username: String) {
    let sessionId = new Date().getTime().toString().substring(7);
    const message = new MessageModel(
      new Date().getTime(),
      'Chat-In-Session',
      this.getWelcomeMessage(username, sessionId)
    );
    this.db
      .list(`chat/${sessionId}/messages`)
      .query.once('value')
      .then((data) => {
        console.log(data.exists());
        if (!data.exists()) {
          localStorage.setItem('username', username.toString());
          localStorage.setItem('sessionId', sessionId);
          this.db.list(`chat/${sessionId}/messages`).push(message); //Welcome message
          this.db
            .list(`chat/${sessionId}/members`)
            .push({ username: username }); //adding memebers count
          this.router.navigateByUrl(`chat/${sessionId}`);
        } else this.router.navigateByUrl(`home/invalid`);
      });
  }

  joinSession(username: String, sessionId: String) {
    this.db
      .list(`chat/${sessionId}/messages`)
      .query.once('value')
      .then((data) => {
        if (data.exists()) {
          localStorage.setItem('username', username.toString());
          localStorage.setItem('sessionId', sessionId.toString());
          this.join(username, sessionId);
        } else this.router.navigateByUrl(`home/invalid`);
      });
  }

  private join(username: String, sessionId: String) {
    const message = new MessageModel(
      new Date().getTime(),
      'Chat-In-Session',
      'Attention!! new Joinie: ' + username
    );
    this.db.list(`chat/${sessionId}/messages`).push(message);
    this.db.list(`chat/${sessionId}/members`).push({ username: username }); //adding memebers count
    this.router.navigateByUrl(`chat/${sessionId}`);
  }
}
