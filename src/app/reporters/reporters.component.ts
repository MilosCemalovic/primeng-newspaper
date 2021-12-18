import { Component, OnInit } from '@angular/core'
import { Reporter } from '../interfaces/reporter'
import { ReportersService } from './../services/reporters.service'
import { DialogService } from 'primeng/dynamicdialog'
import { ReportersDialogComponent } from './reporters-dialog/reporters-dialog.component'
import { TranslocoService } from '@ngneat/transloco'

@Component({
  selector: 'app-reporters',
  templateUrl: './reporters.component.html',
  styleUrls: ['./reporters.component.scss']
})
export class ReportersComponent implements OnInit {

  reporters: Reporter[] = []
  loading = true
  selectedReporter: Reporter
  headers = ['id', 'name', 'username', 'website']
  detailHeaders = ['phone', 'email', 'city', 'streetAddress', 'suite', 'zipCode', 'streetAddressLatitude', 'streetAddressLongitude', 'company', 'companyBusinessServices', 'companyCatchphrase']
  checked = true

  constructor(
    private reportersService: ReportersService,
    private dialog: DialogService,
    private transloco: TranslocoService
  ) { }

  ngOnInit(): void {
    this.getReportersFromService()
  }

  getReportersFromService() {
    this.reportersService.getReporters().subscribe(
      (reporters) => {
        this.loading = false
        this.reporters = reporters
      },
      (err) => {
        this.loading = false
        this.reporters = []
        console.log(err)
      }
    )
  }

  onRowSelect() {
    if (this.checked) {
      this.dialog.open(ReportersDialogComponent, {
        header: this.transloco.translate('repDetails'),
        width: '90%',
        data: {
          reporter: this.selectedReporter,
          detailHeaders: this.detailHeaders
        }
      })
    }
  }

}
