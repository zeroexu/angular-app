import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalanceComponent } from './balance.component';
import {
  MatCardModule,
  MatButtonModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  declarations: [BalanceComponent],
  exports: [BalanceComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule]
})
export class BalanceModule {}
