import { Component, OnInit } from '@angular/core'
import { Reporter } from './../../interfaces/reporter'
import { DynamicDialogConfig } from 'primeng/dynamicdialog'

@Component({
  selector: 'app-reporters-dialog',
  templateUrl: './reporters-dialog.component.html',
  styleUrls: ['./reporters-dialog.component.scss']
})
export class ReportersDialogComponent implements OnInit {

  reporter: Reporter
  detailHeaders: string[]

  constructor(
    private config: DynamicDialogConfig
  ) { }

  ngOnInit(): void {
    this.reporter = this.config.data.reporter
    this.detailHeaders = this.config.data.detailHeaders
  }

}
