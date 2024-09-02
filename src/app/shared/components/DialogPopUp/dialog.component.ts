import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TTask } from '../../types/SharedTypes';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }
  public currentDateTime?: string;

  public task: TTask = {
    name: '',
    hour: new Date(),
    type: 0,
    isCommented: false,
    comments: ''
  }

  ngOnInit(): void {
    const now = new Date();
    this.currentDateTime = now.toISOString().slice(0, 16);
  }

  public toggleComment(isCommented: boolean): void {
    this.task.isCommented = isCommented;
  }

  public onNoClick() : void {
    this.dialogRef.close();
  }

  public onCreateTask() : void {
    switch (this.task.type) {
      case "DO": this.task.type = 0; break;
      case "DECIDE": this.task.type = 1; break;
      case "DELEGATE": this.task.type = 2; break;
      case "DELETE": this.task.type = 3; break;
    }
    this.dialogRef.close(this.task);
    console.log(this.task);
    window.location.reload();
  }
}
