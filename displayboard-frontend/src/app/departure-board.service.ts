import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DepartureBoard } from './departure-board';

@Injectable({
  providedIn: 'root'
})
export class DepartureBoardService {
  private baseURL = "http://localhost:8080/api/departures"

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

  updateEmployee(id: number, departure: DepartureBoard): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}`, departure);
  }

}
