import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PlayerCardComponent} from './player-card/player-card.component';
import {CoachCardComponent} from './coach-card/coach-card.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-team',
  imports: [
    PlayerCardComponent,
    CoachCardComponent,
    NgIf
  ],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent implements OnInit {
  scope: string | null = '1';
  constructor(private route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.scope = params['scope'] || '1'; // Nếu không có scope, mặc định là 1 (Main Team)
    });
  }

  changeScope(newScope: string) {
    this.router.navigate(['/en/team'], { queryParams: { scope: newScope } });
  }

}
