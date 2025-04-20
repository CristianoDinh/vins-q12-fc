import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {News} from '../../interface/news';
import {NewsService} from '../../services/news.service';
import {DateFormatPipe} from '../../pipes/date-format.pipe';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-news',
  imports: [
    NgIf,
    DateFormatPipe,
    NgForOf,
    RouterLink
  ],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent implements OnInit{
  newsList: News[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.newsList = this.newsService.getAllNews();
    this.newsList.sort((a, b) => b.dateCreated.getTime() - a.dateCreated.getTime());
  }
}
