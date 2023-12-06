import { Component } from '@angular/core';
import { ShowApiService } from './show-api.service';
import { IShowDisplay } from './ishow-display';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tv-show-app';
  searchDisplay: IShowDisplay = {
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
  
  constructor(private showApiService: ShowApiService){
  }
  
  ngOnInit(): void {
    this.showApiService.getShowDisplay('darling in the franxx')
    .subscribe(data => this.searchDisplay = data);
  }
  
  doSearch(searchValue: string) {
    const userInput = searchValue;
    // .split(',')
    // .map(space => space.trim())
    
    this.showApiService.getShowDisplay(userInput??undefined)
    .subscribe(data => this.searchDisplay = data);
  }
}
