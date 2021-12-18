import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Article } from 'src/app/interfaces/article'

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent {

  @Input() term: string
  @Input() articles: Article[]
  @Input() loading: boolean

  @Output() sortEmitter = new EventEmitter<string>()

  sort = 'desc'

  sortAsc() {
    this.sort = 'asc'
    this.sortEmitter.emit(this.sort)
  }

  sortDesc() {
    this.sort = 'desc'
    this.sortEmitter.emit(this.sort)
  }

}
