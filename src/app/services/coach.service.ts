import { Injectable } from '@angular/core';
import {Coach} from '../interface/coach';

@Injectable({
  providedIn: 'root'
})
export class CoachService {

  constructor() { }

  protected coachList: Coach[] = [
    { id: 1, name: 'Alexandré Pölking', position: 'Coach', imgUrl: 'coach-polking.png' },
    { id: 2, name: 'Luís Viegas', position: 'Assistant coach', imgUrl: 'coach-viegas.png' },
    { id: 3, name: 'Zinedine Zidane', position: 'HLV', imgUrl: 'coach-zizu.png' },
    { id: 4, name: 'Erik ten Hag', position: 'HLV', imgUrl: 'coach-ten-hag.png' },

    { id: 5, name: "Philippe Troussier", position: 'Defender', imgUrl: 'coach-trusei.png' },
    { id: 6, name: "Ruben Amorim", position: 'Midfielder', imgUrl: 'coach-ruben-amorim.png' },

  ];

  getAllCoach() {
    return this.coachList;
  }
}
