import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartureBoard } from '../departure-board';
import { DepartureBoardService } from '../departure-board.service';

@Component({
  selector: 'app-update-departure',
  templateUrl: './update-departure.component.html',
  styleUrls: ['./update-departure.component.css']
})
export class UpdateDepartureComponent implements OnInit {
  id: number;
  departure: DepartureBoard = new DepartureBoard();

  constructor(private departureService: DepartureBoardService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.departureService.getDepartureById(this.id).subscribe(data => {
      this.departure = data;
    }, error => console.log(error));
  }
  onSubmit(){
    this.departureService.updateEmployee(this.id, this.departure).subscribe( data =>{
      this.goToDepartureList();
    }
    , error => console.log(error));
  }

  goToDepartureList(){
    this.router.navigate(['/departures']);
  }
}
