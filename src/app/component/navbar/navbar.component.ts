import { logoutAction } from './../../store/login.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  
  isLoggedIn: Boolean = false;
  isUserLoggedIn: boolean;

  constructor(private store: Store<{ isLoggedIn: { isLoggedIn: boolean } }>) {}

  ngOnInit(): void {
    this.store.select('isLoggedIn').subscribe((data) => {
      this.isUserLoggedIn = data.isLoggedIn;
    });
  }
  
  onLogin() {
    //this.isLoggedIn = true;
  }
  onLogout() {
   //this.isLoggedIn = false;
   this.store.dispatch(logoutAction())
  }

}
