import { Injectable } from '@angular/core'
import { Article } from 'src/app/interfaces/article'

@Injectable({
  providedIn: 'root'
})
export class NewsDetailsService {

  articles: Article[] = []
  loading = true
  term = ''
  sort = 'desc'

}
