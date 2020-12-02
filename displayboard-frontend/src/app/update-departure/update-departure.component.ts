import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartureBoard } from '../departure-board';
import { DepartureBoardService } from '../departure-board.service';
import { DepartureStatus } from '../departure-list/class/departure-status';
import { AirportGate } from '../airport-gate';

@Component({
  selector: 'app-update-departure',
  templateUrl: './update-departure.component.html',
  styleUrls: ['./update-departure.component.css']
})
export class UpdateDepartureComponent implements OnInit {
  id: number;
  departure: DepartureBoard = new DepartureBoard();
  airportGate: AirportGate[];
  departureStatus: DepartureStatus[];

  constructor(private departureService: DepartureBoardService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getAirportGates();
    this.getDepartureStatus();
    this.departureService.getDepartureById(this.id).subscribe(data => {
      this.departure = data;
    }, error => console.log(error));
  }
  onSubmit(){
    this.departureService.updateDeparture(this.id, this.departure).subscribe( data =>{
      this.goToDepartureList();
    }
    , error => console.log(error));
  }

  goToDepartureList(){
    this.router.navigate(['/departures']);
  }

  private getAirportGates(){
    this.departureService.getAirportGateList().subscribe(data => {
      this.airportGate = data;
    })
  }
  private getDepartureStatus(){
    this.departureService.getDepartureStatusList().subscribe(data => {
      this.departureStatus = data;
    })
  }
}
