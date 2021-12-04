import { Pagination } from './pagination'
import { Article } from './article'

export interface News {
  pagination: Pagination
  data: Article[]
}
