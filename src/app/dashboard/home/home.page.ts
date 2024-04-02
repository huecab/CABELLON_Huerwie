import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private dataService: DataService, private router: Router) {}
  catImages: any[] = [];

  ngOnInit(): void {
    this.getCatImages();
  }

  getCatImages(): void {
    this.dataService.getCatImages(21).subscribe((data: any[]) => {
      console.log(data);
      this.catImages = data; 
    });
  }

  logout() {
    this.router.navigate(['login']);
    localStorage.removeItem('username');
  }
}
