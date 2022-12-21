import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  onLogin() {
    this.isLoggedIn = true;
  }
  onLogout() {
    this.isLoggedIn = false;
  }

  isLoggedIn: Boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
