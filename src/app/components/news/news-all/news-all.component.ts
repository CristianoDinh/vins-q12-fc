import {Component, Input, OnInit} from '@angular/core';
import {News} from '../../../interface/news';
import {NewsService} from '../../../services/news.service';
import {NgForOf, NgIf} from '@angular/common';
import {DateFormatPipe} from '../../../pipes/date-format.pipe';

@Component({
  selector: 'app-news-all',
  imports: [
    NgIf,
    DateFormatPipe,
    NgForOf
  ],
  templateUrl: './news-all.component.html',
  styleUrl: './news-all.component.css'
})
export class NewsAllComponent implements OnInit {
  @Input() scope: string = '0'; // Nhận scope từ `news-detail`
  newsList: News[] = [];
  latestNews ?: News;
  otherNews: News[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.loadNews();
  }

  loadNews() {
    this.newsList = this.newsService.getAllNews();
    // Nếu không phải scope "0", lọc theo loại
    // if (this.scope !== '0') {
    //   this.newsList = this.newsList.filter(news => news.type === this.scope);
    // }
    // Sắp xếp và chia danh sách tin
    this.newsList.sort((a, b) => b.dateCreated.getTime() - a.dateCreated.getTime());
    this.latestNews = this.newsList.length > 0 ? this.newsList[0] : undefined;
    this.otherNews = this.newsList.slice(1);

  }

}
