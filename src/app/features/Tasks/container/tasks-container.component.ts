import { Component, EventEmitter, Output } from '@angular/core';

type linkInput = {
  name: string;
  link: string;
}

@Component({
  selector: 'app-tasks-container',
  templateUrl: './tasks-container.component.html',
  styleUrls: ['./tasks-container.component.scss']
})
export class TasksContainerComponent {
  @Output() taskButtonEmitter = new EventEmitter();

  public taskButton : linkInput = {
    name: 'Add Task',
    link: 'addtask'
  }

  getTaskButtonDetails() : void {
    this.taskButtonEmitter.emit(this.taskButton);
  }
}
