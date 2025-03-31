import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common';
import {NewsAllComponent} from './news-all/news-all.component';

@Component({
  selector: 'app-news-detail',
  imports: [
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    NgIf,
    NewsAllComponent
  ],
  templateUrl: './news-detail.component.html',
  styleUrl: './news-detail.component.css'
})
export class NewsDetailComponent implements OnInit {
  scope: string | null = '0';
  constructor(private route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.scope = params['scope'] || '0'; // Nếu không có scope, mặc định là 0 (Main Team)
    });
  }

  changeScope(newScope: string) {
    this.router.navigate(['/news'], { queryParams: { scope: newScope } });
  }

}
