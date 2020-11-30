import { Component, OnInit } from '@angular/core';
import { ArrivalBoard } from '../arrival-board';
import { ArrivalBoardService } from '../arrival-board.service';
import { Router } from '@angular/router';
import { ArrivalStatus } from '../arrival-list/class/arrival-status';
import { Airport } from '../airport';

@Component({
  selector: 'app-create-arrival',
  templateUrl: './create-arrival.component.html',
  styleUrls: ['./create-arrival.component.css']
})
export class CreateArrivalComponent implements OnInit {
  arrival: ArrivalBoard = new ArrivalBoard();
  airportCity: Airport[];

  private airlineFlight = new Map<string, string[]>([
    ['Alaska', ['AS4585', 'AS1047','AS3934','AS0475','AS7930']],
    ['American', ['AA1075', 'AA2583','AA9638','AA2957','AA2965']],
    ['Delta',['DL5629','DL1846','DL2745','DL4729','DL9636']],
    ['Frontier',['F97576','F90846','F91846','F92817','F97463']],
    ['JetBlue',['B69375','B63214','B62847','B61847','B62842']],
    ['Southwest',['WN3057','WN0857','WN1804','WN2948','WN1542']],
    ['Spirit',['NK4856','NK3729','NK2174','NK1846','NK3846']],
    ['United',['UA0857','UA2784','UA1746','UA7427','UA4729']]
  ])

  status: ArrivalStatus[] = [
    {status: 'Delayed'},
    {status: 'On-Time'},
    {status: 'Cancelled'},
    {status: 'Arrived'},
    {status: 'Landing'}
  ]

  airline: string;
  flight: string;

  constructor(private arrivalService: ArrivalBoardService, private router: Router) { }

  ngOnInit(): void {
    this.getAirportCities();
  }

  saveArrival(){
    this.arrivalService.createArrival(this.arrival).subscribe(data => {
      this.goToArrivalList();
    },error => console.log(error));
  }

  private getAirportCities(){
    this.arrivalService.getAirportCityList().subscribe(data => {
      this.airportCity = data;
    })
  }

  goToArrivalList(){
    this.router.navigate([`/arrivals`])
  }

  onSubmit(){
    console.log(this.arrival)
    this.saveArrival();
  }

  get airlines(): string[] {
    return Array.from(this.airlineFlight.keys());
  }

  get flights(): string[] | undefined {
    return this.airlineFlight.get(this.arrival.airline);
  }
}
