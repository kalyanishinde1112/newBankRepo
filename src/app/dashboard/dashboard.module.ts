import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '../shared/material.module';
import { LandingPageComponent } from '../shared/landing-page/landing-page.component';


@NgModule({
  declarations: [
    DashboardComponent,
    LandingPageComponent
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
