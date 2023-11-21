import { Component } from '@angular/core';
import { IShowDisplay } from '../ishow-display';
import { ShowApiService } from '../show-api.service';

@Component({
  selector: 'app-home-screen-show',
  templateUrl: './home-screen-show.component.html',
  styleUrls: ['./home-screen-show.component.css']
})
export class HomeScreenShowComponent {
  display: IShowDisplay = {
    tvShowImg: '',
    tvShowId: 33921,
    tvShowTitle: 'Franxx',
    tvShowLanguage: '',
    tvShowRunningStatus: '',
    tvShowRating: 0,
    tvShowDesc: '',
  }
  
  constructor(private showApiService: ShowApiService){
    this.showApiService.getShowDisplay(33921)
  }
}
