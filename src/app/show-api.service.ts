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

  getShowDisplay(tvShowId: number) {
    return this.httpClient.get<IShowDisplayData>(`https://
    api.tvmaze.com/lookup/shows?thetvdb=${tvShowId}`).pipe(
      map(data => this.transformToIShowDisplay(data))
    )
  }
  
  private transformToIShowDisplay(data: IShowDisplayData): IShowDisplay {
    return {
      tvShowImg: data.image.medium,
      tvShowId: data.id,
      tvShowTitle: data.name,
      tvShowLanguage: data.language,
      tvShowRunningStatus: data.status,
      tvShowRating: data.weight,
      tvShowDesc: data.summary,
    }
  }
}
