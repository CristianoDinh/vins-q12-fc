import { Component } from '@angular/core';
import {BannerComponent} from '../banner/banner.component';
import {MatchesComponent} from '../matches/matches.component';

@Component({
  selector: 'app-home',
  imports: [
    BannerComponent,
    MatchesComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
