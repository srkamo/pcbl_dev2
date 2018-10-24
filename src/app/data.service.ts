import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getSeasons(){
    return this.http.get('http://qa.pcblroyals.com:8888/api/viewAllSeason')
  }

  getAllSeasonsAndRecentGames(){
    
    return this.http.get('http://qa.pcblroyals.com:8888/api/getAllSeasonsAndRecentGames')
  }

  getCareerBattingStats(){
   
    return this.http.get('http://qa.pcblroyals.com:8888/api/viewCareerStatsAllPlayer')
  }

  getCareerPitchingStats(){
    
    return this.http.get('http://qa.pcblroyals.com:8888/api/viewCareerPitchingStatsAllPlayer')
  }

  getStatsBySeason(id){
    return this.http.get('http://qa.pcblroyals.com:8888/api/getStatsBySeason/'+id)
  }
}
