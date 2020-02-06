import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyComponent } from './buy.component';
import { AdquisitionsModule } from '../adquisitions/adquisitions.module';
import { MatTabsModule } from '@angular/material';

@NgModule({
  declarations: [BuyComponent],
  exports: [BuyComponent],
  imports: [CommonModule, AdquisitionsModule, MatTabsModule]
})
export class BuyModule {}
