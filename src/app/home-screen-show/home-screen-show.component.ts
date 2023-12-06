import { Component, Input,  } from '@angular/core';
import { IShowDisplay } from '../ishow-display';

@Component({
  selector: 'app-home-screen-show',
  templateUrl: './home-screen-show.component.html',
  styleUrls: ['./home-screen-show.component.css']
})
export class HomeScreenShowComponent {
  @Input() homeDisplay: IShowDisplay = {
    tvShowImg: {
      medium: '',
      original: '',
    },
    tvShowId: 0,
    tvShowTitle: '',
    tvShowLanguage: '',
    tvShowRunningStatus: '',
    tvShowRating: 0,
    tvShowDesc: '',
  }
}
