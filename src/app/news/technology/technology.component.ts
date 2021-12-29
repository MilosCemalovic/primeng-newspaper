import { Component, OnInit } from '@angular/core'
import { NewsService } from 'src/app/services/news.service'
import { Article } from 'src/app/interfaces/article'

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {

  articles: Article[] = []
  loading = false
  term = ''
  sort = 'desc'

  constructor(
    private newsService: NewsService,
    // public newsDetails: NewsDetailsService
  ) { }

  ngOnInit(): void {
    this.getTechnology()
  }

  getTechnology() {
    this.loading = true
    this.newsService.getTechnologyNews(this.sort).subscribe(
      (news) => {
        this.loading = false
        this.articles = news.data
      },
      (err) => {
        this.loading = false
        this.articles = []
        console.log(err)
      }
    )
  }

  sortDirection(direction: string) {
    this.sort = direction
    this.getTechnology()
  }

}
