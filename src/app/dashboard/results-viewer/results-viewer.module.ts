import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsViewerComponent } from './results-viewer.component';
import { ChartsModule } from 'ng2-charts';
import { MatCardModule, MatIconModule } from '@angular/material';
@NgModule({
  declarations: [ResultsViewerComponent],
  exports: [ResultsViewerComponent],
  imports: [CommonModule, ChartsModule, MatCardModule, MatIconModule]
})
export class ResultsViewerModule {}
