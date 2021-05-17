import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { ResponsiveLayoutComponent } from './responsive-layout/responsive-layout.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AddTableIconComponent } from './add-table-icon/add-table-icon.component';
import { TableItemComponent } from './table-item/table-item.component';
import { EmojiSelectorComponent } from './emoji-selector/emoji-selector.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { ModalsModule } from '../modals/modals.module';



@NgModule({
  declarations: [
    ResponsiveLayoutComponent,
    HeaderComponent,
    SideBarComponent,
    AddTableIconComponent,
    TableItemComponent,
    EmojiSelectorComponent,
    ColorPickerComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PickerModule,
    EmojiModule,
    // ModalsModule
  ],
  exports: [
    MaterialModule,
    PickerModule,
    EmojiModule,
    ResponsiveLayoutComponent,
    HeaderComponent,
    SideBarComponent,
    AddTableIconComponent,
    TableItemComponent,
    EmojiSelectorComponent,
    ColorPickerComponent
  ]
})
export class TemplatesModule { }
