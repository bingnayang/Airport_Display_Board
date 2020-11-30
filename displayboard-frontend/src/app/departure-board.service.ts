import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DepartureBoard } from './departure-board';
import { Airport } from './airport';

@Injectable({
  providedIn: 'root'
})
export class DepartureBoardService {
  private baseURL = "http://localhost:8080/api/departures"
  private baseURLAirport = "http://localhost:8080/api/cities"

  constructor(private httpClient: HttpClient) { }

  getDepartureList(): Observable<DepartureBoard[]>{
    return this.httpClient.get<DepartureBoard[]>(`${this.baseURL}`)
  }

  createDeparture( departure: DepartureBoard ): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,departure);
  }

  getDepartureById(id: number): Observable<DepartureBoard>{
    return this.httpClient.get<DepartureBoard>(`${this.baseURL}/${id}`);
  }

  updateDeparture(id: number, departure: DepartureBoard): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}`, departure);
  }

  deleteDeparture(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`,{responseType: 'text'});
  }

  getAirportCityList(): Observable<Airport[]>{
    return this.httpClient.get<Airport[]>(`${this.baseURLAirport}`)
  }
}
