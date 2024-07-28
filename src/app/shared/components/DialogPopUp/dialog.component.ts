import { Component, Inject } from '@angular/core';
import { TTask } from 'src/types/SharedTypes';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  public task: TTask = {
    name: '',
    hour: new Date(),
    type: 'DO',
    isCommented: false,
    comments: ''
  }

  public toggleComment(isCommented: boolean): void {
    this.task.isCommented = isCommented;
  }

  onNoClick() : void {
    this.dialogRef.close();
  }

  onCreateTask() : void {
    return this.dialogRef.close(this.task)
  }
}
