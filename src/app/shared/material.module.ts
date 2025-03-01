import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatList, MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import {MatChipsModule} from '@angular/material/chips';
import {MatProgressBarModule} from '@angular/material/progress-bar';

const materialComponents = [
  MatToolbarModule,
  MatSidenavModule,
  FormsModule,
  ReactiveFormsModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatListModule,
  MatTableModule,
  MatCheckboxModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
  MatChipsModule,
   MatProgressBarModule
  
];

@NgModule({
  declarations: [
  ],
  imports: [ CommonModule],
  exports: [materialComponents]
})
export class MaterialModule { }
