import { GeneralToolBarModule } from './../commons/general-tool-bar/general-tool-bar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ProfileModule } from './profile/profile.module';
import { BalanceModule } from './balance/balance.module';
import { ResultsViewerModule } from './results-viewer/results-viewer.module';
import { NewsModule } from './news/news.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    GeneralToolBarModule,
    ProfileModule,
    BalanceModule,
    ResultsViewerModule,
    NewsModule
  ]
})
export class DashboardModule {}
