import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartureBoard } from '../departure-board';
import { DepartureBoardService } from '../departure-board.service';

@Component({
  selector: 'app-create-departure',
  templateUrl: './create-departure.component.html',
  styleUrls: ['./create-departure.component.css']
})
export class CreateDepartureComponent implements OnInit {
  departure: DepartureBoard = new DepartureBoard();

  constructor(private departureService: DepartureBoardService, private router: Router) { }

  ngOnInit(): void {
  }

  saveDeparture(){
    this.departureService.createDeparture(this.departure).subscribe(data => {
      console.log(data);
      this.goToDepartureList();
    }, error => console.log(error));
  }

  goToDepartureList(){
    this.router.navigate([`/departures`])
  }

  onSubmit(){
    console.log(this.departure)
    this.saveDeparture();
  }
}
