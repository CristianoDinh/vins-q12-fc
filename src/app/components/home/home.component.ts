import { Component } from '@angular/core';
import {BannerComponent} from '../banner/banner.component';
import {MatchesComponent} from '../matches-intro/matches.component';
import {NewsComponent} from '../news-intro/news.component';
import {LineupComponent} from '../lineup-v1.2.0/lineup-v1.2.0.component';
import {SponsorComponent} from '../sponsor/sponsor.component';

@Component({
  selector: 'app-home',
  imports: [
    BannerComponent,
    MatchesComponent,
    NewsComponent,
    LineupComponent,
    SponsorComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
