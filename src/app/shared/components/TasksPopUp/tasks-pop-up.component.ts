import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '../DialogPopUp/dialog.component';

@Component({
  selector: 'app-tasks-pop-up',
  templateUrl: './tasks-pop-up.component.html',
  styleUrls: ['./tasks-pop-up.component.scss']
})
export class TasksPopUpComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>
  ) {}

  public onDeleteTask() : void {
    this.dialogRef.close();
    window.location.reload();
  }

  public onNoClick() : void {
    this.dialogRef.close();
  }
}
