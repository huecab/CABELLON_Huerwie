import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController, Platform } from '@ionic/angular';
import { ModalComponent } from './calculator/modal/modal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  username: any;
  constructor(private router: Router, private modalController: ModalController, private alertController: AlertController, private platform: Platform) { }

  ngOnInit() {
    this.username = localStorage.getItem('username');
  }

  goToCalculatorTab() {
    this.router.navigate(['dashboard', 'calculator']);
  }

  goToHomeTab() {
    this.router.navigate(['dashboard', 'home']);
  }

  async toggleModal() {
    const modal = await this.modalController.create({
      component: ModalComponent
    });
    return await modal.present();
  }

  messages: string[] = [
    'Cats can jump up to six times their length.',
    'The world\'s oldest cat lived to be 38 years old.',
    'Cats are nearsighted, but their peripheral vision and night vision are much better than that of humans.',
    'A group of cats is called a clowder.',
    'Cats have five toes on their front paws, but only four on their back paws.'
  ];
  messageIndex: number = 0;
  lastMessageIndex: number = -1;

  async alert() {
    let newMessageIndex = this.lastMessageIndex;
    while (newMessageIndex === this.lastMessageIndex) {
      newMessageIndex = Math.floor(Math.random() * this.messages.length);
    }

    const alert = await this.alertController.create({
      header: 'DID YOU KNOW?',
      message: this.messages[newMessageIndex],
      buttons: ['OK'],
      cssClass: 'cus-alert'
    });
    this.lastMessageIndex = newMessageIndex;
    await alert.present();

    setTimeout(() => {
      alert.dismiss();
    }, 3000);
  }
}
