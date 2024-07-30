import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './components/ButtonApp/button.component';
import { DialogComponent } from './components/DialogPopUp/dialog.component';
import { TableTasksComponent } from './components/TableTasks/tabletasks.component';

import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import { FormatterPipe } from './pipes/formatter.pipe';
@NgModule({
  declarations: [
    DialogComponent,
    ButtonComponent,
    TableTasksComponent,
    FormatterPipe,
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
    MatTableModule

  ],
  exports: [
    DialogComponent,
    ButtonComponent,
    TableTasksComponent,
    FormatterPipe
  ]
})
export class SharedModule { }
