import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent {

  constructor(private auth: AuthService) {
    auth.handleAuthentication();
  }

  login() {
    this.auth.login();
  }

  logOut() {
    this.auth.logout();
  }

}
