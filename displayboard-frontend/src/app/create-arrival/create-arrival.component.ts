import { Component, OnInit } from '@angular/core';
import { ArrivalBoard } from '../arrival-board';
import { ArrivalListComponent } from '../arrival-list/arrival-list.component';

@Component({
  selector: 'app-create-arrival',
  templateUrl: './create-arrival.component.html',
  styleUrls: ['./create-arrival.component.css']
})
export class CreateArrivalComponent implements OnInit {
  arrival: ArrivalBoard = new ArrivalBoard(); 
  constructor() { }

  ngOnInit(): void {
  }

}
