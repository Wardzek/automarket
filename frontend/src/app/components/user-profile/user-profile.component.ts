import { Component, OnInit } from '@angular/core';
import { User } from '../../Models/user.model';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent implements OnInit {
  UserProfile!: User;

  constructor(public authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.profileUser().subscribe(
      data => {
        this.UserProfile = data;
      },
      error => {
        console.error('There was an error!', error);
      }
    );
  }
}