import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  constructor(private db: AngularFireDatabase, private router: Router) {}

  getMembers(): AngularFireList<any> {
    if (!localStorage.getItem('sessionId'))
      this.router.navigateByUrl(`home/invalid`);
    var sessionId = localStorage.getItem('sessionId');
    return this.db.list(`chat/${sessionId}/members`);
  }
}
