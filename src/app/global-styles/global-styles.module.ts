import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalStylesRoutingModule } from './global-styles-routing.module';
import { GlobalStylesComponent } from './global-styles.component';


@NgModule({
  declarations: [
    GlobalStylesComponent
  ],
  imports: [
    CommonModule,
    GlobalStylesRoutingModule
  ]
})
export class GlobalStylesModule { }
