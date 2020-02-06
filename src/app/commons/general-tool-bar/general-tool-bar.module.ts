import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralToolBarComponent } from './general-tool-bar.component';
import {
  MatToolbarModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';

@NgModule({
  declarations: [GeneralToolBarComponent],
  exports: [GeneralToolBarComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class GeneralToolBarModule {}
