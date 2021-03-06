import { Component, OnInit } from '@angular/core'
import { TranslocoService } from '@ngneat/transloco'
import { MenuItem } from 'primeng/api'
import { MenuItemUtil } from './utils/menu-item-util'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  activeLang = 'en'

  navItems: MenuItem[] = [
    { id: 'news', label: 'news', icon: 'pi pi-id-card', routerLink: ['news'] },
    { id: 'reporters', label: 'reporters', icon: 'pi pi-users', routerLink: ['reporters'] },
    { id: 'flights', label: 'flights', icon: 'pi pi-send', routerLink: ['flights'] }
  ]

  langs: MenuItem[] = [
    { label: 'English', command: () => this.setLanguage('en') },
    { label: 'Srpski', command: () => this.setLanguage('rs') }
  ]

  constructor(private transloco: TranslocoService) { }

  ngOnInit(): void {
    // Get language from Local Storage
    if (!localStorage.getItem('lang')) {
      this.transloco.setActiveLang('en')
    } else {
      this.transloco.setActiveLang(localStorage.getItem('lang'))
    }

    this.activeLang = this.transloco.getActiveLang()


    this.transloco.selectTranslate('news').subscribe(
      translate => MenuItemUtil.findAction(this.navItems, 'news').label = translate
    )

    this.transloco.selectTranslate('reporters').subscribe(
      translate => MenuItemUtil.findAction(this.navItems, 'reporters').label = translate
    )

    this.transloco.selectTranslate('flights').subscribe(
      translate => MenuItemUtil.findAction(this.navItems, 'flights').label = translate
    )

  }

  setLanguage(lang: string) {
    this.activeLang = lang
    this.transloco.setActiveLang(this.activeLang)

    // Set language to Local Storage
    this.transloco.langChanges$.subscribe(
      () => localStorage.setItem('lang', this.activeLang)
    )
  }

}
