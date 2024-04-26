import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private alertController: AlertController, private router: Router, private auth: AuthenticationService) { }

  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  ngOnInit() {
  }

  signup() {
    this.auth.signup(this.email, this.password, this.confirmPassword);
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
  }

}
