import { Component, OnInit } from '@angular/core';
import { ArrivalBoard } from '../arrival-board';
import { ArrivalBoardService } from '../arrival-board.service';

@Component({
  selector: 'app-arrival-list',
  templateUrl: './arrival-list.component.html',
  styleUrls: ['./arrival-list.component.css']
})
export class ArrivalListComponent implements OnInit {
  arrivals: ArrivalBoard[];

  constructor(private arrivalService: ArrivalBoardService) { }

  ngOnInit(): void {
    this.getArrivals();
  }
  private getArrivals(){
    this.arrivalService.getArrivalList().subscribe(data => {
      this.arrivals = data;
    })
  }

}
