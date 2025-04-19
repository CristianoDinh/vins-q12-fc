import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common';
import {NewsAllComponent} from './news-all/news-all.component';

@Component({
  selector: 'app-news-category',
  imports: [
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    NgIf,
    NewsAllComponent
  ],
  templateUrl: './news-category.component.html',
  styleUrl: './news-category.component.css'
})
export class NewsCategoryComponent implements OnInit {
  scope: string | null = '0';
  constructor(private route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.scope = params['scope'] || '0'; // Nếu không có scope, mặc định là 0 (Main Team)
    });
  }

  changeScope(newScope: string) {
    this.router.navigate(['/en/news'], { queryParams: { scope: newScope } });
  }

}
