import { Component, OnInit } from '@angular/core';
import { DepartureBoard } from '../departure-board';
import { DepartureBoardService } from '../departure-board.service';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css']
})
export class BoardListComponent implements OnInit {
  departures: DepartureBoard[];

  constructor(private departureService: DepartureBoardService) { }

  ngOnInit(): void {
    this.getDepartures();
  }

  private getDepartures(){
    this.departureService.getDepartureList().subscribe(data => {
      this.departures = data;
    })
  }

}
