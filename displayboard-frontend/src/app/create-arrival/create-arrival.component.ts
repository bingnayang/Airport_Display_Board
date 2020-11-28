import { Component, OnInit } from '@angular/core';
import { ArrivalBoard } from '../arrival-board';
import { ArrivalBoardService } from '../arrival-board.service';
import { Router } from '@angular/router';
import { ArrivalStatus } from '../arrival-list/class/arrival-status';

@Component({
  selector: 'app-create-arrival',
  templateUrl: './create-arrival.component.html',
  styleUrls: ['./create-arrival.component.css']
})
export class CreateArrivalComponent implements OnInit {
  arrival: ArrivalBoard = new ArrivalBoard();
  status: ArrivalStatus[] = [
    {status: 'Delayed'},
    {status: 'On-Time'},
    {status: 'Cancelled'},
    {status: 'Arrived'},
    {status: 'Landing'}
  ]

  constructor(private arrivalService: ArrivalBoardService, private router: Router) { }

  ngOnInit(): void {
  }

  saveArrival(){
    this.arrivalService.createArrival(this.arrival).subscribe(data => {
      this.goToArrivalList();
    },error => console.log(error));
  }

  goToArrivalList(){
    this.router.navigate([`/arrivals`])
  }

  onSubmit(){
    console.log(this.arrival)
    this.saveArrival();
  }
}
