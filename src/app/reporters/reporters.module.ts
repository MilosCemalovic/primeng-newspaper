import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ReportersRoutingModule } from './reporters-routing.module'
import { ReportersComponent } from './reporters.component'
import { PrimengModule } from '../primeng.module'
import { ReportersDialogComponent } from './reporters-dialog/reporters-dialog.component';
import { ReportersDetailsComponent } from './reporters-details/reporters-details.component'


@NgModule({
  declarations: [ReportersComponent, ReportersDialogComponent, ReportersDetailsComponent],
  imports: [
    CommonModule,
    ReportersRoutingModule,
    PrimengModule
  ]
})
export class ReportersModule { }
