import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSegmentModalComponent } from './add-segment-modal/add-segment-modal.component';
import { AddTableModalComponent } from './add-table-modal/add-table-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplatesModule } from '../templates/templates.module';



@NgModule({
  declarations: [
    AddSegmentModalComponent,
    AddTableModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TemplatesModule
  ],
  entryComponents: [
    AddSegmentModalComponent,
    AddTableModalComponent
  ]
})
export class ModalsModule { }
