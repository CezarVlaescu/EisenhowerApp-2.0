import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/components/DialogPopUp/dialog.component';
import { TButtonObject, TTask } from 'src/app/shared/types/SharedTypes';

@Component({
  selector: 'app-tasks-container',
  templateUrl: './tasks-container.component.html',
  styleUrls: ['./tasks-container.component.scss']
})
export class TasksContainerComponent implements OnInit {
  public buttonInput: TButtonObject = { name: 'Add Task'}
  public data? : TTask;

  constructor(
    private dialog: MatDialog,
  ) {} // use the service in ngOnInit AFTER CONSTRUCTING the component instance

  ngOnInit(): void {}
  
  openDialog(): void {
    // const dialogRef = this.dialog
    // .open(DialogComponent, {
    //   height: '400px',
    //   width: '500px',
    //   data: {}
    // })

    // dialogRef.afterClosed()
    // .subscribe((resultTask: TTask) => {
    //   if(resultTask) this.service
    //   .createTaskAsync(resultTask)
    //   .subscribe((response) => {
    //     console.log("Task created", response)
    //   },
    //   (error) => {
    //     console.error("Task creation failed", error)     
    //   });
    //   else throw new Error('Task creation failed ');
    // })
  }
}