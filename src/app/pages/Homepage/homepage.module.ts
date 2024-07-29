import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageContainerComponent } from './container/homepage-container.component';
import { MenuModule } from 'src/app/features/Menu/menu.module';
import { TasksModule } from 'src/app/features/Tasks/tasks.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    HomepageContainerComponent
  ],
  imports: [
    CommonModule,
    TasksModule,
    MenuModule,
    SharedModule
  ],
  exports: [
    HomepageContainerComponent
  ]
})
export class HomepageModule { }
