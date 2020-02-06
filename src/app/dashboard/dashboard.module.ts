import { GeneralToolBarModule } from './../commons/general-tool-bar/general-tool-bar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ContainerModule } from '../commons/container/container.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    GeneralToolBarModule,
    ContainerModule
  ]
})
export class DashboardModule {}
