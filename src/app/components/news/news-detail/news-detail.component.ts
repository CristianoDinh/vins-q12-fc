import {Component, inject, OnInit} from '@angular/core';
import {News} from '../../../interface/news';
import {ActivatedRoute} from '@angular/router';
import {NewsService} from '../../../services/news.service';
import {DatePipe, NgIf} from '@angular/common';

@Component({
  selector: 'app-news-detail',
  imports: [
    DatePipe,
    NgIf,
  ],
  templateUrl: './news-detail.component.html',
  styleUrl: './news-detail.component.css'
})
export class NewsDetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  newsService = inject(NewsService);

  news !: News | undefined ;

  constructor() {
    const newsId = Number(this.route.snapshot.params['id']);
    this.news = this.newsService.getNewsById(newsId);
  }

  // ngOnInit(): void {
  //   this.route.paramMap.subscribe(params => {
  //     const idParam = params.get('id');
  //     this.newsId = idParam ? +idParam : 0;
  //     this.news = this.newsService.getNewsById(this.newsId);
  //   });
  // }

}
