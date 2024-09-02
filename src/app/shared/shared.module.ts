import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonComponent } from './components/ButtonApp/button.component';
import { DialogComponent } from './components/DialogPopUp/dialog.component';
import { TableTasksComponent } from './components/TableTasks/tabletasks.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatIcon, MatIconModule } from '@angular/material/icon';

import { FormatterPipe } from './pipes/formatter.pipe';
import { ScreenSizeDirective } from './directives/screen-size.directive';
import { TableTasksMobileComponent } from './components/TableTasks/table-task-mobile/table-tasks-mobile.component';
import { TasksPopUpComponent } from './components/TasksPopUp/tasks-pop-up.component';

@NgModule({
  declarations: [
    DialogComponent,
    ButtonComponent,
    TableTasksComponent,
    FormatterPipe,
    ScreenSizeDirective,
    TableTasksMobileComponent,
    TasksPopUpComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatRadioModule,
    MatCheckboxModule,
    MatTableModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
  ],
  exports: [
    DialogComponent,
    ButtonComponent,
    TableTasksComponent,
    FormatterPipe,
    ScreenSizeDirective,
    TableTasksMobileComponent,
    TasksPopUpComponent,
  ]
})
export class SharedModule { }
