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

  status: DepartureStatus[] = [
    {status: 'Delayed'},
    {status: 'On-Time'},
    {status: 'Cancelled'},
    {status: 'Boarding'}
  ]
  gate: AirportGate [] = [
    {gate: 'A01'},
    {gate: 'A02'},
    {gate: 'A03'},
    {gate: 'A04'},
    {gate: 'A05'},
    {gate: 'B01'},
    {gate: 'B02'},
    {gate: 'B03'},
    {gate: 'B04'},
    {gate: 'B05'},
    {gate: 'C01'},
    {gate: 'C02'},
    {gate: 'C03'},
    {gate: 'C04'},
    {gate: 'C05'}
  ]

  constructor(private departureService: DepartureBoardService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
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
  
}
