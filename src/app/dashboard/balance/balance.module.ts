import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalanceComponent } from './balance.component';
import { BuyModule } from '../buy/buy.module';
import {
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatTabsModule,
  MatListModule
} from '@angular/material';

@NgModule({
  declarations: [BalanceComponent],
  exports: [BalanceComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatListModule,
    BuyModule
  ]
})
export class BalanceModule {}
