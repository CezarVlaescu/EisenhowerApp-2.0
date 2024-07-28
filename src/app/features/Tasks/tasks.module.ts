import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksContainerComponent } from './container/tasks-container.component';
import { SharedComponentsModule } from 'src/app/shared/components/sharedComponents.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    TasksContainerComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    MatDialogModule
  ],
  exports: [
    TasksContainerComponent
  ]
})
export class TasksModule { }
