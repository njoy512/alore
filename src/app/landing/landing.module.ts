import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { TemplatesModule } from '../shared/templates/templates.module';


@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    TemplatesModule,
    LandingRoutingModule,
  ]
})
export class LandingModule { }
