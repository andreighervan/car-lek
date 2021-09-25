import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlobalStylesComponent } from './global-styles.component';

const routes: Routes = [{ path: '', component: GlobalStylesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlobalStylesRoutingModule { }
