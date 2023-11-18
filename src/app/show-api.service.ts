import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IShowDisplayData } from './ishow-displaydata';

@Injectable({
  providedIn: 'root'
})
export class ShowApiService {

  constructor(private httpClient: HttpClient) { }

  getShowDisplay(showId: number) {
    this.httpClient.get<IShowDisplayData>(`https://
    api.tvmaze.com/lookup/shows?thetvdb=${showId}`)
  }
  
  private transformToIShowDisplay(data: IShowDisplayData): IShowDisplay {
    
  }
}
