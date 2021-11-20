import { Component, OnInit } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireObject,
} from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // itemRef: AngularFireObject<any>;
  // item: Observable<any[]>;
  constructor(private db: AngularFireDatabase) {
    // this.itemRef = db.object('item');
    // this.itemRef.snapshotChanges().subscribe((action) => {
    //   console.log(action.type);
    //   console.log(action.key);
    //   console.log(action.payload.val());
    // });
    // db.list('sessions')
    //   .valueChanges()
    //   .subscribe((data) => {
    //     console.log(data);
    //   });
  }

  ngOnInit(): void {}
}
