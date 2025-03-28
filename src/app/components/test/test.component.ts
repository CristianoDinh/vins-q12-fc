import {Component, inject} from '@angular/core';
import {Player} from '../../interface/player';
import {PlayerService} from '../../services/player.service';
import {NgForOf} from '@angular/common';
import {NextDirective} from '../../directives/next.directive';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    NgForOf,
    NextDirective
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  playerList: Player[] = [];
  playerService: PlayerService = inject(PlayerService);

  constructor() {
    this.playerList = this.playerService.getAllPlayers();
  }
}
