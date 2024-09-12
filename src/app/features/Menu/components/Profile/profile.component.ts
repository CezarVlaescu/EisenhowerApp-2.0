import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/auth/user.service';
import { GenderService } from 'src/app/shared/services/gender.service';
import { TUserData } from 'src/app/shared/types/SharedTypes';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
  public userData!: TUserData | null;
  public gender: string = '';

  constructor(
    private userService: UserService,
    private genderService: GenderService
  ) {
    
  }
  ngOnInit(): void {
    this.getUserData();
    this.genderService.gender$.subscribe(gender => {
      this.gender = gender;
    })
  }

  public getUserData() {
    this.userService.getUserById().subscribe({
      next: (data: TUserData | null) => {
        this.userData = data;
      },
      error: (err: Error) => {
        console.error(err);
      }
    })

  }
}
