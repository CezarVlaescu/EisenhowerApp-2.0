import { Component, OnInit } from '@angular/core';
import { TLoginInput, TRegisterUserInput } from 'src/app/shared/types/SharedTypes';
import { RegisterService } from 'src/app/shared/services/auth/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerInput!: TRegisterUserInput;
  emailAddress : string = "";

  constructor(private registerService: RegisterService) {}
  
  ngOnInit(): void {
    this.registerInput = {
      email: "",
      username: "",
      password: "",
      image: "",
    }
  }
  
  onFileChanged($event: any) : void {
    const file = $event.target.files[0];
    if (file) {
      this.registerInput.image = file.name;
    }
  }

  registerUser(data : TLoginInput) : void {
    this.registerInput = {
      ...this.registerInput,
      username: data.username,
      password: data.password,
      email: this.emailAddress
    }

    this.registerService.registerUser(this.registerInput).subscribe({
      next: (response) => {
        console.log('User successfully registered:', response);
      },
      error: (error) => {
        console.error('There was an error during registration:', error);
      }})
  }
}
