import {Component, inject} from '@angular/core';
import {Player} from '../../interface/player';
import {PlayerService} from '../../services/player.service';
import {NgForOf, NgStyle} from '@angular/common';
import {NextDirective} from '../../directives/next.directive';

@Component({
  selector: 'app-lineup',
  imports: [
    NextDirective,
    NgForOf,
    NgStyle
  ],
  templateUrl: './lineup-v1.2.0.component.html',
  styleUrl: './lineup-v1.2.0.component.css'
})
export class LineupComponent {
  playerList: Player[] = [];
  playerList_NoRumour: Player[] = [];

  playerService: PlayerService = inject(PlayerService);
  constructor() {
    this.playerList = this.playerService.getAllPlayers();
    this.playerList_NoRumour = this.playerService.getAllPlayers_NoRumour();
  }

}
