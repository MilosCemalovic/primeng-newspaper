import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { PrimengModule } from './primeng.module'
import { NewsComponent } from './news/news.component'
import { TechnologyComponent } from './news/technology/technology.component'
import { SerbianComponent } from './news/serbian/serbian.component'
import { Ng2SearchPipeModule } from 'ng2-search-filter'
import { FormsModule } from '@angular/forms'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewsDetailsComponent } from './news/news-details/news-details.component'

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    TechnologyComponent,
    SerbianComponent,
    PageNotFoundComponent,
    NewsDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    PrimengModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
