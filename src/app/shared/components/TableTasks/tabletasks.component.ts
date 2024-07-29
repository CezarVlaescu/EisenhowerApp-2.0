import { Component } from '@angular/core';
import { tasks } from '../../types/mockdata';

export interface ITaskElement {
  name: string;
  hour: Date;
}

const doTasks = tasks.filter((task) => task.type === 'DO');
const getObjectsDoTask = () => doTasks.map((task) => {
  return {name: task.name, hour: task.hour}
}) // To do, make a service for this functions, will need to apply for all tasks

const ELEMENT_DATA_TASKS: ITaskElement[] = getObjectsDoTask();

@Component({
  selector: 'app-tabletasks',
  templateUrl: './tabletasks.component.html',
  styleUrls: ['./tabletasks.component.scss']
})


export class TableTasksComponent {
  displayedColumns: string[] = ['name', 'hour']
  dataSource = ELEMENT_DATA_TASKS;
}
