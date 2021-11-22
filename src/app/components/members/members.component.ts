import { Component, OnInit } from '@angular/core';
import { MembersService } from 'src/app/services/members.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
})
export class MembersComponent implements OnInit {
  membersOnline: Number;
  constructor(private memberService: MembersService) {
    this.membersOnline = 0;
  }

  ngOnInit(): void {
    this.memberService
      .getMembers()
      .snapshotChanges()
      .subscribe((data) => {
        this.membersOnline = data.length;
      });
  }
}
