import {Component, inject, Input} from '@angular/core';
import {Player} from '../../../interface/player';
import {PlayerService} from '../../../services/player.service';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-player-card',
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './player-card.component.html',
  styleUrl: './player-card.component.css'
})
export class PlayerCardComponent {
  playerList: Player[] = [];
  playerService: PlayerService = inject(PlayerService);

  constructor() {
    this.playerList = this.playerService.getAllPlayers();
  }
}
