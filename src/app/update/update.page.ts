import { Component, OnInit } from '@angular/core';
import { User, iUser } from '../home/home.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  users: User = new User();
  id: any;

  genres: string[] = [
    'Pop','Rock', 'Hip-hop', 'R&B', 'Country', 'Electronic', 'Jazz', 'Blues', 'Reggae', 'Classical', 
    'Alternative', 'Indie', 'Metal', 'Punk', 'Soul'
  ];

  constructor(private route: ActivatedRoute, private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.synchUpdate(this.auth.newUserList);
  }

  async updateUser() {
    if (this.validation()) {
      if (this.users.id) {
        this.auth.updateUser(this.users);
        this.auth.presentAlert('Success', 'Song updated successfully!')
      }
      this.users = new User();
      this.router.navigate(['home']);
    }
  }

  home(){
    this.router.navigate(['home']);
  }

  validation() {
    if (!this.users.title) {
      this.auth.presentToast('Please fill in the Title.', 3000);
      return false;
    }
    if (!this.users.artist) {
      this.auth.presentToast('Please fill in the Artist.', 3000);
      return false;
    }
    if (!this.users.streams) {
      this.auth.presentToast('Please fill in the Stream Count.', 3000);
      return false;
    }
    if (!this.users.releaseDate) {
      this.auth.presentToast('Please fill in the Released Date.', 3000);
      return false;
    }
    if (!this.users.isExplicit) {
      this.auth.presentToast('Please fill in the Explicit.', 3000);
      return false;
    }
    if (!this.users.genres) {
      this.auth.presentToast('Please fill in the Genre.', 3000);
      return false;
    }
    return true;
  }

  synchUpdate(users: iUser[]) {
    users.forEach(user => {
      if (this.id == user.id) {
        this.users.id = user.id;
        this.users.title = user.title;
        this.users.artist = user.artist;
        this.users.streams = user.streams;
        this.users.releaseDate = user.releaseDate;
        this.users.genres = user.genres;
        this.users.isExplicit = user.isExplicit;
      }
    });
  }
}

