import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private auth: AuthenticationService) {}

  logout() {
    this.router.navigate(['login']);
    this.auth.setAuthentication(false);
  }

}
