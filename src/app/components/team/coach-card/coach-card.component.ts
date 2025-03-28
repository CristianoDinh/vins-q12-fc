import {Component, inject} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {Player} from '../../../interface/player';
import {PlayerService} from '../../../services/player.service';
import {Coach} from '../../../interface/coach';
import {CoachService} from '../../../services/coach.service';

@Component({
  selector: 'app-coach-card',
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './coach-card.component.html',
  styleUrl: './coach-card.component.css'
})
export class CoachCardComponent {
  coachList: Coach[] = [];
  coachService: CoachService = inject(CoachService);

  constructor() {
    this.coachList = this.coachService.getAllCoach();
  }
}
