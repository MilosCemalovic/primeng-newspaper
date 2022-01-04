import { NgModule } from '@angular/core'
import { TranslocoModule } from '@ngneat/transloco'
import { Ng2SearchPipeModule } from 'ng2-search-filter'
import { FormsModule } from '@angular/forms'
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
import { ListboxModule } from 'primeng/listbox'
import { ClipboardModule } from 'ngx-clipboard'
import { SidebarModule } from 'primeng/sidebar'
import { ToggleButtonModule } from 'primeng/togglebutton'

@NgModule({
  exports: [
    TranslocoModule,
    FormsModule,
    Ng2SearchPipeModule,
    MenubarModule,
    CardModule,
    ButtonModule,
    ProgressSpinnerModule,
    TabViewModule,
    InputTextModule,
    TableModule,
    DynamicDialogModule,
    MenuModule,
    InplaceModule,
    ListboxModule,
    SidebarModule,
    ClipboardModule,
    ToggleButtonModule
  ],
  providers: [DialogService]
})
export class PrimengModule { }
