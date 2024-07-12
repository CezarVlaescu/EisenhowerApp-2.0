import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksContainerComponent } from './container/tasks-container.component';



@NgModule({
  declarations: [
    TasksContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TasksContainerComponent
  ]
})
export class TasksModule { }
