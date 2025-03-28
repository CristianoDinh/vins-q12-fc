import { Injectable } from '@angular/core';
import {Player} from '../interface/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  constructor() { }

  protected playerList: Player[] = [
    { id: 1, name: 'Lëv YaBao', position: 'Goalkeeper', imgUrl: 'squad-1.png' },
    { id: 7, name: 'Rô Nam Đô', position: 'Midfielder', imgUrl: 'squad-1.png' },
    { id: 8, name: 'Cùcù re Q`uan', position: 'Defender', imgUrl: 'squad-1.png' },
    { id: 9, name: 'Øduongaard', position: 'Midfielder', imgUrl: 'squad-1.png' },
    { id: 10, name: "Mes'Son", position: 'Defender', imgUrl: 'squad-1.png' },
    { id: 13, name: 'HarriQotter', position: 'Midfielder', imgUrl: 'squad-1.png' },
    { id: 16, name: 'Ẽndick', position: 'Forward', imgUrl: 'squad-1.png' },
    { id: 20, name: 'Kobbie Do', position: 'Forward', imgUrl: 'squad-1.png' },
    // { id: 30, name: 'Quân Palmer', position: 'Goalkeeper', imgUrl: 'squad-1.png' }
  ];

  getAllPlayers() {
    return this.playerList;
  }
}
