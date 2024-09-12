import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/auth/user.service';
import { GenderService } from 'src/app/shared/services/gender.service';
import { TLoginInput, TRegisterUserInput } from 'src/app/shared/types/SharedTypes';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerInput!: TRegisterUserInput;
  username : string = "";

  constructor(
    private userService: UserService,
    private router: Router,
    private snackBar: MatSnackBar,
    private genderService: GenderService
  ) {}
  
  ngOnInit(): void {
    this.registerInput = {
      email: "",
      username: "",
      password: "",
      image: "",
    }
  }
  
  public onFileChanged($event: any) : void {
    const file = $event.target.files[0];
    if (file) {
      this.registerInput.image = file.name;
    }
  }

  public registerUser(data : TLoginInput) : void {
    this.registerInput = {
      ...this.registerInput,
      email: data.email,
      password: data.password,
      username: this.username
    }

    this.userService.registerUser(this.registerInput).subscribe({
      next: (response) => {
        console.log('User successfully registered:', response);
        this.snackBar.open('Registration successful! Redirecting to login...', '✅', { duration: 3000 });
        this.onRegister();
      },
      error: (error) => {
        console.error('There was an error during registration:', error);
        this.snackBar.open('Registration failed. Please try again.', '❌', { duration: 3000 });
      }})
  }

  public onCheckboxChange(selected: string) : void {
    const gender = selected === 'male' ? 'male' : 'female'
    console.log(gender)
    this.genderService.setGender(gender)
  }

  private onRegister() {
    return this.router.navigate(['/login']);
  }
}
