import { Component} from '@angular/core';

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
  public buttonAddTask: linkInput = {
    name: 'Add your task',
    link: '/addtask'
  }
}
