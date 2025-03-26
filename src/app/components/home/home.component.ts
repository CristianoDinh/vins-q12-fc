import { Component } from '@angular/core';
import {BannerComponent} from '../banner/banner.component';
import {MatchesComponent} from '../matches/matches.component';
import {NewsComponent} from '../news/news.component';
import {LineUpComponent} from '../line-up/line-up.component';
import {SponsorComponent} from '../sponsor/sponsor.component';


@Component({
  selector: 'app-home',
  imports: [
    BannerComponent,
    MatchesComponent,
    NewsComponent,
    LineUpComponent,
    SponsorComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
