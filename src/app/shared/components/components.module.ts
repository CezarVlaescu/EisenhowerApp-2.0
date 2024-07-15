import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './ButtonApp/button/button.component';
import { TasksModule } from 'src/app/features/Tasks/tasks.module';

@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    CommonModule,
    TasksModule,
  ],
  exports: [
    ButtonComponent
  ]
})
export class SharedComponentsModule { }
