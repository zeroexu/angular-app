import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdquisitionsComponent } from './adquisitions.component';
import { MatListModule, MatIconModule } from '@angular/material';

@NgModule({
  declarations: [AdquisitionsComponent],
  exports: [AdquisitionsComponent],
  imports: [CommonModule, MatListModule, MatIconModule]
})
export class AdquisitionsModule {}
