import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArrivalBoard } from './arrival-board';
import { Airport } from './airport';

@Injectable({
  providedIn: 'root'
})
export class ArrivalBoardService {
  private baseURL = "http://localhost:8080/api/arrivals"
  private baseURLAirport = "http://localhost:8080/api/cities"

  constructor(private httpClient: HttpClient) { }

  getArrivalById(id: number): Observable<ArrivalBoard>{
    return this.httpClient.get<ArrivalBoard>(`${this.baseURL}/${id}`);
  }

  getArrivalList(): Observable<ArrivalBoard[]>{
    return this.httpClient.get<ArrivalBoard[]>(`${this.baseURL}`)
  }

  createArrival(arrival: ArrivalBoard): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,arrival);
  }

  updateArrival(id: number, arrival: ArrivalBoard): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}`,arrival)
  }

  deleteArrival(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`,{responseType: 'text'});
  }


  getAirportCityList(): Observable<Airport[]>{
    return this.httpClient.get<Airport[]>(`${this.baseURLAirport}`)
  }
}
