import { Component } from '@angular/core';
import {BannerComponent} from '../banner/banner.component';
import {MatchesComponent} from '../matches/matches.component';
import {NewsComponent} from '../news/news.component';
import {LinesUpComponent} from '../lines-up/lines-up.component';

@Component({
  selector: 'app-home',
  imports: [
    BannerComponent,
    MatchesComponent,
    NewsComponent,
    LinesUpComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
