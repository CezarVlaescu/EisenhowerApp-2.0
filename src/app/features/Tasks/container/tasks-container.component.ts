import { Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/components/DialogPopUp/dialog.component';
import { ButtonObject } from 'src/types/SharedTypes';
import { TTask } from 'src/types/SharedTypes';

@Component({
  selector: 'app-tasks-container',
  templateUrl: './tasks-container.component.html',
  styleUrls: ['./tasks-container.component.scss']
})
export class TasksContainerComponent {
  public buttonInput: ButtonObject = { name: 'Add Task'}

  constructor(private dialog: MatDialog) {}
  
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      height: '400px',
      width: '500px',
      data: {}
    })
    
    dialogRef.afterClosed().subscribe((resultTask: TTask) => {
      if(resultTask) console.log('resulted task: ', resultTask)

      // task service (post method)
    } )
  }
}