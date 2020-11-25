import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArrivalBoard } from './arrival-board';

@Injectable({
  providedIn: 'root'
})
export class ArrivalBoardService {
  private baseURL = "http://localhost:8080/api/arrivals"

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

}
