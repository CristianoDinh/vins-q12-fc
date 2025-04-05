import { Injectable } from '@angular/core';
import {Player} from '../interface/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  constructor() { }

  protected playerList: Player[] = [
    { id: 1, name: 'Lëv YaBao', position: 'Goalkeeper', imgUrl: 'squad-1-yabao.png' },
    { id: 7, name: 'Rô Nam Đô', position: 'Midfielder', imgUrl: 'squad-1.png' },
    { id: 8, name: 'Cùcù re Q`uan', position: 'Defender', imgUrl: 'squad-1.png' },
    { id: 9, name: 'Øduongaard', position: 'Midfielder', imgUrl: 'squad-1.png' },

    { id: 10, name: "Mes'Son", position: 'Defender', imgUrl: 'squad-1.png' },
    { id: 13, name: 'HarriQotter', position: 'Midfielder', imgUrl: 'squad-1.png' },
    { id: 16, name: 'Ẽndick', position: 'Forward', imgUrl: 'squad-1.png' },
    { id: 20, name: 'Kobbie Do', position: 'Forward', imgUrl: 'squad-1.png' },

    { id: 30, name: 'Quân Palmer', position: 'Midfielder', imgUrl: 'squad-1.png' },
    // { id: 31, name: 'Secrete', position: 'GK', imgUrl: 'player-secrete-gk.png' },
    // { id: 32, name: 'Secrete', position: 'Mid', imgUrl: 'player-secrete-mid.png' },
    // { id: 33, name: 'Secrete', position: 'For', imgUrl: 'player-secrete-forward.png' },

    { id: 0, name: 'RUMOUR', position: 'Goalkeeper1', imgUrl: 'secrete-player.png' },
    { id: 0, name: 'RUMOUR', position: 'Defender1', imgUrl: 'secrete-player.png' },
    { id: 0, name: 'RUMOUR', position: 'Forward1', imgUrl: 'secrete-player.png' },
  ];

  getAllPlayers() {
    return this.playerList;
  }

  getAllPlayers_NoRumour() {
    return this.playerList.filter(player =>
      player.position === 'Goalkeeper' || player.position === 'Defender' || player.position === 'Midfielder' || player.position === 'Forward'
    );
  }

}
