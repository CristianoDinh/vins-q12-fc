import { Injectable } from '@angular/core';
import {News} from '../interface/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor() { }

  protected newsList: News[] = [

  ]

  getAllNews() {
    return this.newsList;
  }

  listNewsByMatch() {
    return this.newsList.filter(news =>
      news.title === 'match'
    )
  }
  listNewsByClub() {
    return this.newsList.filter(news =>
      news.title === 'club'
    )
  }
  listNewsByInterviews() {
    return this.newsList.filter(news =>
      news.title === 'interviews'
    )
  }
  listNewsByOthers() {
    return this.newsList.filter(news =>
      news.title === 'others'
    )
  }
}
