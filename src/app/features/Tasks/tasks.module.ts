import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksContainerComponent } from './container/tasks-container.component';
import { SharedComponentsModule } from 'src/app/shared/components/components.module';

@NgModule({
  declarations: [
    TasksContainerComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsModule
  ],
  exports: [
    TasksContainerComponent
  ]
})
export class TasksModule { }
