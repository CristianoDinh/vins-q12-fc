import { Injectable } from '@angular/core';
import {Player} from '../interface/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  constructor() { }

  protected playerList: Player[] = [
    { id: 1, name: 'Lëv YaBao', position: 'Goalkeeper', imgStartingUrl: 'squad-1-yabao-2.png',imgUrl: 'squad-1-yabao.png', celebrationUrl: 'celeb-1-yabao-3.gif' },
    { id: 7, name: 'Rô Nam Đô', position: 'Midfielder', imgStartingUrl: 'squad-unknown.png', imgUrl: 'squad-unknown.png', celebrationUrl: '' },
    { id: 8, name: 'Cùcù re Q`uan', position: 'Defender', imgStartingUrl: 'squad-8-cucu.png', imgUrl: 'squad-8-cucu.png', celebrationUrl: '' },
    { id: 9, name: 'Øduongaard', position: 'Midfielder', imgStartingUrl: 'squad-9-duong.png', imgUrl: 'squad-9-duong.png', celebrationUrl: '' },

    { id: 10, name: "Mes'Son", position: 'Defender', imgStartingUrl: 'squad-unknown.png', imgUrl: 'squad-unknown.png', celebrationUrl: '' },
    { id: 13, name: 'HarriQotter', position: 'Midfielder', imgStartingUrl: 'squad-unknown.png', imgUrl: 'squad-unknown.png', celebrationUrl: '' },
    { id: 16, name: 'Ẽndick', position: 'Forward', imgStartingUrl: 'squad-unknown.png', imgUrl: 'squad-unknown.png', celebrationUrl: '' },
    { id: 20, name: 'Kobbie Do', position: 'Forward', imgStartingUrl: 'squad-unknown.png', imgUrl: 'squad-unknown.png', celebrationUrl: '' },

    { id: 30, name: 'Quân Palmer', position: 'Midfielder', imgStartingUrl: 'squad-unknown.png', imgUrl: 'squad-unknown.png', celebrationUrl: '' },
    // { id: 31, name: 'Secrete', position: 'GK', imgUrl: 'player-secrete-gk.png' },
    // { id: 32, name: 'Secrete', position: 'Mid', imgUrl: 'player-secrete-mid.png' },
    // { id: 33, name: 'Secrete', position: 'For', imgUrl: 'player-secrete-forward.png' },

    { id: 0, name: 'RUMOUR', position: 'Goalkeeper1', imgStartingUrl: 'secrete-player.png', imgUrl: 'secrete-player.png', celebrationUrl: '' },
    { id: 0, name: 'RUMOUR', position: 'Defender1', imgStartingUrl: 'secrete-player.png', imgUrl: 'secrete-player.png', celebrationUrl: '' },
    { id: 0, name: 'RUMOUR', position: 'Forward1', imgStartingUrl: 'secrete-player.png', imgUrl: 'secrete-player.png', celebrationUrl: '' },
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
