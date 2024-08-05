import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthentificationRoutingModule } from './authentification-routing.module';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SharedComponent } from './shared/shared.component';
import { FormsModule } from '@angular/forms';
import { RememberUserComponent } from './login/components/remember-user.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    SharedComponent,
    RememberUserComponent
  ],
  imports: [
    CommonModule,
    AuthentificationRoutingModule,
    FormsModule,
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    SharedComponent
  ]
})
export class AuthentificationModule { }
