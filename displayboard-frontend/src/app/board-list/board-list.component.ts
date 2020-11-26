import { Component, OnInit } from '@angular/core';
import { DepartureBoard } from '../departure-board';
import { DepartureBoardService } from '../departure-board.service';
import { ArrivalBoard } from '../arrival-board';
import { ArrivalBoardService } from '../arrival-board.service';


@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css']
})
export class BoardListComponent implements OnInit {
  departures: DepartureBoard[];
  arrivals: ArrivalBoard[];

  constructor(private departureService: DepartureBoardService, private arrivalService: ArrivalBoardService) { }

  ngOnInit(): void {
    this.getDepartures();
    this.getArrivals();
  }

  private getDepartures(){
    this.departureService.getDepartureList().subscribe(data => {
      this.departures = data;
    })
  }

  private getArrivals(){
    this.arrivalService.getArrivalList().subscribe(data => {
      this.arrivals = data;
    })
  }
}
