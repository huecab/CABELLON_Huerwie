import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  username: any;
  constructor(private router: Router) { }

  ngOnInit() {
    this.username = localStorage.getItem('username');
  }

    goToComponentTab() {
    this.router.navigate(['dashboard', 'component']);
  }

    goToHomeTab() {
    this.router.navigate(['dashboard', 'home']);
  }
}
