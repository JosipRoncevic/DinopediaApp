import { Component, OnInit } from '@angular/core';
import { emiters } from '../emitters/emitters';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  authenticated = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    emiters.authEmitter.subscribe(
      (auth: boolean) => {
        this.authenticated = auth;
      }
    )
  }

  logout(): void {
    this.http.get('http://localhost:3000/users/logout', { withCredentials: true })
      .subscribe(() => this.authenticated = false)
    window.location.reload();
  }
}
