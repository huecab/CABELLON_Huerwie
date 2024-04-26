import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  canProceed = false;

  constructor(private router: Router, private alertController: AlertController, private toastController: ToastController) { }

  canActivate() {
    if (localStorage.getItem("loggedIn") == "true") {
      return true;
    }
    this.router.navigate(['login']);
    return false
  }

  setAuthentication(auth: boolean) {
    if (auth == true) {
      localStorage.setItem("loggedIn", "true");
    } else (
      localStorage.setItem("loggedIn", "false")
    )
  }
  
  async signup(email: string, password: string, confirmPassword: string) {
    if (!email || !password || !confirmPassword) {
      this.presentAlert('Error', 'Please fill out all fields.');
      return; 
    }

    if (password !== confirmPassword) {
      this.presentAlert('Error', 'The passwords you entered do not match.');
      return;
    }

    if (!email.includes('@')) {
      this.presentToast('Please enter a valid email address with @ symbol.', 3000);
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user;
      this.presentAlert('Success', 'Signup successful! You can now login with your new account.');
      this.router.navigate(['login']);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorMessage.includes("Error (auth/email-already-in-use)")) {
        this.presentAlert('Error', 'This email is already in use.');
      } else if (errorMessage.includes("Error (auth/invalid-email).")) {
        this.presentAlert('Error', 'The email address you entered is not valid.');
      }
    })
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentToast(message: string, duration: number){
    const toast = await this.toastController.create({
      message: message,
      duration: duration
    });
    toast.present();
  }

  async login(email: string, password: string) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user;
      this.setAuthentication(true);
      this.presentAlert('Success', 'Login successful!');
      this.router.navigate(['home']);
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
      if (errorMessage.includes("Error (auth/invalid-credential)")) {
        this.presentAlert('Error', 'The email or password you entered is incorrect.');
      } else if (errorMessage.includes("Error (auth/invalid-email).")) {
        this.presentAlert('Error', 'The email address you entered is not valid.');
      }
    })
  }
}
