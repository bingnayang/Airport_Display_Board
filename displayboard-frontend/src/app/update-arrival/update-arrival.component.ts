import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArrivalBoard } from '../arrival-board';
import { ArrivalBoardService } from '../arrival-board.service';

@Component({
  selector: 'app-update-arrival',
  templateUrl: './update-arrival.component.html',
  styleUrls: ['./update-arrival.component.css']
})
export class UpdateArrivalComponent implements OnInit {
  id: number;
  arrival: ArrivalBoard = new ArrivalBoard();

  constructor(private arrivalService: ArrivalBoardService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.arrivalService.getArrivalById(this.id).subscribe(data => {
      this.arrival = data;
    },error => console.log(error));
  }

}
