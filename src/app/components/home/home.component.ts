import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public username: String = '';
  public sessionId: String = '';

  constructor(
    private sessionService: SessionService,
    public toastService: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  createSession() {
    this.username = this.username.trim();
    if (this.username) {
      this.sessionService.createNewSession(this.username);
    } else this.toastService.error('username is required');
  }

  joinSession() {
    this.username = this.username.trim();
    this.sessionId = this.sessionId.trim();
    if (this.sessionId && this.username) {
      this.sessionService.joinSession(this.username, this.sessionId);
    } else this.toastService.error('username and sessionid is required');
  }

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      if (data.status === 'invalid') this.toastService.error('Invalid session');
      this.sessionId = '';
      this.router.navigateByUrl(`home`);
    });
    this.username = localStorage.getItem('username') || '';
  }
}
