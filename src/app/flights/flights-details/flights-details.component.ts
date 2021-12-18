import { Component, Input } from '@angular/core'
import { WorkerFlight } from './../../interfaces/worker-flight'

@Component({
  selector: 'app-flights-details',
  templateUrl: './flights-details.component.html',
  styleUrls: ['./flights-details.component.scss']
})
export class FlightsDetailsComponent {

  @Input() selectedWorkerFlights: WorkerFlight[]

  headings = ['num', 'from', 'to', 'from_date', 'to_date', 'plane', 'duration', 'from_gate', 'to_gate']

  sidebar: boolean

}
