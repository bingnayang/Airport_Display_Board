import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArrivalBoard } from '../arrival-board';
import { ArrivalBoardService } from '../arrival-board.service';
import { Router } from '@angular/router';
import { ArrivalStatus } from '../arrival-list/class/arrival-status';

@Component({
  selector: 'app-update-arrival',
  templateUrl: './update-arrival.component.html',
  styleUrls: ['./update-arrival.component.css']
})
export class UpdateArrivalComponent implements OnInit {
  id: number;
  arrival: ArrivalBoard = new ArrivalBoard();

  status: ArrivalStatus[] = [
    {status: 'Delayed'},
    {status: 'On-Time'},
    {status: 'Cancelled'},
    {status: 'Arrived'},
    {status: 'Landing'}
  ]

  constructor(private arrivalService: ArrivalBoardService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.arrivalService.getArrivalById(this.id).subscribe(data => {
      this.arrival = data;
    },error => console.log(error));
  }

  onSubmit(){
    this.arrivalService.updateArrival(this.id,this.arrival).subscribe(data => {
      this.goToArrivalList();
    },error => console.log(error));
  }
  goToArrivalList(){
    this.router.navigate([`/arrivals`])
  }
}
