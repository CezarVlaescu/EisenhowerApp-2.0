import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuContainerComponent } from './container/menu-container.component';
import { MenuElementsComponent } from './components/Menu-Elements/menu-elements.component';
import { ProfileComponent } from './components/Profile/profile.component';

import {MatBadgeModule} from '@angular/material/badge';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MenuContainerComponent,
    MenuElementsComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    MatBadgeModule,
    SharedModule
  ],
  exports: [
    MenuContainerComponent,
    MenuElementsComponent,
    ProfileComponent
  ]
})

export class MenuModule { }
