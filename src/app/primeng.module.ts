import { NgModule } from '@angular/core'
import { TranslocoRootModule } from './transloco-root.module'
import { MenubarModule } from 'primeng/menubar'
import { CardModule } from 'primeng/card'
import { ButtonModule } from 'primeng/button'
import { ProgressSpinnerModule } from 'primeng/progressspinner'
import { TabViewModule } from 'primeng/tabview'
import { InputTextModule } from 'primeng/inputtext'
import { TableModule } from 'primeng/table'
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog'
import { MenuModule } from 'primeng/menu'
import { InplaceModule } from 'primeng/inplace'

@NgModule({
  exports: [
    TranslocoRootModule,
    MenubarModule,
    CardModule,
    ButtonModule,
    ProgressSpinnerModule,
    TabViewModule,
    InputTextModule,
    TableModule,
    DynamicDialogModule,
    MenuModule,
    InplaceModule
  ],
  providers: [DialogService]
})
export class PrimengModule { }
