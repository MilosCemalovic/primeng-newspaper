import { Component, OnInit } from '@angular/core'
import { Worker } from './../interfaces/worker'
import { FlightsService } from './../services/flights.service'
import { WorkerFlight } from './../interfaces/worker-flight'

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {

  workers: Worker[] = []
  selectedWorker: Worker
  loading = false
  sidebar = false
  selectedWorkerFlights: WorkerFlight[] = []

  constructor(private flightsService: FlightsService) { }

  ngOnInit(): void {
    this.getWokersFromServer()
  }

  getWokersFromServer() {
    this.loading = true
    this.flightsService.getWorkers().subscribe(
      (workers) => {
        this.loading = false
        this.workers = workers
      },
      (err) => {
        this.loading = false
        this.workers = []
        console.log(err)
      }
    )
  }

  onListSelect(selectedWorker: Worker) {

    this.sidebar = true

    this.flightsService.getWorkerFlights(selectedWorker.id).subscribe(
      (workerFlights: WorkerFlight[]) => {
        this.loading = false
        this.selectedWorkerFlights = workerFlights
      },
      (err) => {
        this.loading = false
        this.selectedWorkerFlights = []
        console.log(err)
      }
    )
  }

}
