import { Component, OnInit } from '@angular/core';
import { DepartureBoard } from '../departure-board';
import { DepartureBoardService } from '../departure-board.service'

@Component({
  selector: 'app-departure-list',
  templateUrl: './departure-list.component.html',
  styleUrls: ['./departure-list.component.css']
})
export class DepartureListComponent implements OnInit {
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
