import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing.component';
import { ListSegmentsComponent } from './list-segments/list-segments.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'list', pathMatch: 'prefix'
  },
  {
    path: 'list', component: LandingComponent,
    children: [
      {
        path: '', component: ListSegmentsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
