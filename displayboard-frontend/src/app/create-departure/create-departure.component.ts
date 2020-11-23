import { Component, OnInit } from '@angular/core';
import { DepartureBoard } from '../departure-board';

@Component({
  selector: 'app-create-departure',
  templateUrl: './create-departure.component.html',
  styleUrls: ['./create-departure.component.css']
})
export class CreateDepartureComponent implements OnInit {
  departure: DepartureBoard = new DepartureBoard();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.departure)
  }
}
