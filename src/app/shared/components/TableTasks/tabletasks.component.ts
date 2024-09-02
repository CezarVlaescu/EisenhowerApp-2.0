import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TTask } from '../../types/SharedTypes';
import { MatDialog } from '@angular/material/dialog';
import { TasksService } from 'src/app/core/services/tasks/tasks.service';
import { TasksPopUpComponent } from '../TasksPopUp/tasks-pop-up.component';

export interface ITaskElement {
  name: string;
  hour: Date;
  actions: string
}

@Component({
  selector: 'app-tabletasks',
  templateUrl: './tabletasks.component.html',
  styleUrls: ['./tabletasks.component.scss']
})


export class TableTasksComponent implements OnChanges {
  @Input() tasks: TTask[] | undefined = [];

  constructor(
    private tasksService: TasksService,
    private dialog: MatDialog, 
  ) {}

  displayedColumns: string[] = ['name', 'hour', 'actions']
  dataSource : ITaskElement[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['tasks']) this.updateDataSource();
  }

  private updateDataSource(): void {
    this.dataSource = this.tasks ? this.tasks.map(task => ({
      name: task.name,
      hour: task.hour,
      actions: ''
    })) : [];
  }

  public openDialog(currentTask: TTask): void {
    const dialogRef = this.dialog.open(
      TasksPopUpComponent, {
        height: '250px',
        width: '500px',
        data: {currentTask}
      }
    )
    
    const taskToDeleteId = this.tasks?.find(task => task.name === currentTask.name)

    dialogRef.afterClosed()
    .subscribe(() => {
      this.tasksService.deteleAsync(taskToDeleteId?.id, taskToDeleteId?.type)
      .subscribe({
        next: () => console.log("Task deleted", taskToDeleteId?.id),
        error: (err: Error) => console.log("Task error", err)
      })
    })
  }
}
