import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuContainerComponent } from './container/menu-container.component';
import { MenuElementsComponent } from './components/Menu-Elements/menu-elements.component';
import { ProfileComponent } from './components/Profile/profile.component';
import { SharedComponentsModule } from 'src/app/shared/components/sharedComponents.module';
import {MatBadgeModule} from '@angular/material/badge';


@NgModule({
  declarations: [
    MenuContainerComponent,
    MenuElementsComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    MatBadgeModule,
    SharedComponentsModule
  ],
  exports: [
    MenuContainerComponent,
    MenuElementsComponent,
    ProfileComponent
  ]
})

export class MenuModule { }
