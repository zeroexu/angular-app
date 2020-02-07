import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { MatCardModule, MatIconModule } from '@angular/material';

@NgModule({
  declarations: [NewsComponent],
  exports: [NewsComponent],
  imports: [CommonModule, MatCardModule, MatIconModule]
})
export class NewsModule {}
