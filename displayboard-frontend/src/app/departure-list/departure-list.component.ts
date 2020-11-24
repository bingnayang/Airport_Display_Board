import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartureBoard } from '../departure-board';
import { DepartureBoardService } from '../departure-board.service'

@Component({
  selector: 'app-departure-list',
  templateUrl: './departure-list.component.html',
  styleUrls: ['./departure-list.component.css']
})
export class DepartureListComponent implements OnInit {
  departures: DepartureBoard[];

  constructor(private departureService: DepartureBoardService, private router: Router) { }

  ngOnInit(): void {
    this.getDepartures();
  }
  private getDepartures(){
    this.departureService.getDepartureList().subscribe(data => {
      this.departures = data;
    })
  }

  updateDeparture(id: number){
    this.router.navigate(['update-departure', id]);
  }
  
  deleteDeparture(id: number){
    this.departureService.deleteDeparture(id).subscribe(data => {
      console.log(data);
      this.getDepartures();
    });
  }
}
