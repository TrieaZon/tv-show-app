import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IShowDisplayData } from './ishow-displaydata';
import { IShowDisplay } from './ishow-display';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ShowApiService {

  constructor(private httpClient: HttpClient) { }

  getShowDisplay(tvShowTitle: string) {
    
    return this.httpClient.get<IShowDisplayData>(
      `https://api.tvmaze.com/singlesearch/shows?q=${tvShowTitle}`
    ).pipe(
      map(data => this.transformToIShowDisplay(data))
    )
    
  }
  
  private transformToIShowDisplay(data: IShowDisplayData): IShowDisplay {
    
    return {
      tvShowImg: {
        medium: data.image.medium,
        original: data.image.original,
      },
      tvShowId: data.id,
      tvShowTitle: data.name,
      tvShowLanguage: data.language,
      tvShowRunningStatus: data.status,
      tvShowRating: data.weight,
      tvShowDesc: data.summary,
    }
  }
}
