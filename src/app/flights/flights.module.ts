import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { FlightsRoutingModule } from './flights-routing.module'
import { FlightsComponent } from './flights.component'
import { PrimengModule } from '../primeng.module'
import { FlightsDetailsComponent } from './flights-details/flights-details.component'
import { TimePipe } from '../pipes/time.pipe'


@NgModule({
  declarations: [
    FlightsComponent,
    FlightsDetailsComponent,
    TimePipe
  ],
  imports: [
    CommonModule,
    FlightsRoutingModule,
    PrimengModule
  ]
})
export class FlightsModule { }
