import { Component} from '@angular/core';

type ButtonObject = {
  name: string;
  link: string;
}

@Component({
  selector: 'app-tasks-container',
  templateUrl: './tasks-container.component.html',
  styleUrls: ['./tasks-container.component.scss']
})
export class TasksContainerComponent {
  public buttonInput: ButtonObject = {
    name: 'Add Task',
    link: 'addtask'
  }
}