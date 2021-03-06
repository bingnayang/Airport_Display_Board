import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartureBoard } from '../departure-board';
import { DepartureBoardService } from '../departure-board.service';
import { Airport } from '../airport';
import { DepartureStatus } from '../departure-list/class/departure-status';
import { AirportGate  } from '../airport-gate';

@Component({
  selector: 'app-create-departure',
  templateUrl: './create-departure.component.html',
  styleUrls: ['./create-departure.component.css']
})
export class CreateDepartureComponent implements OnInit {
  departure: DepartureBoard = new DepartureBoard();
  airportCity: Airport[];
  airportGate: AirportGate[];
  departureStatus: DepartureStatus[];
  airline: string;
  flight: string;

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

  constructor(private departureService: DepartureBoardService, private router: Router) { }

  ngOnInit(): void {
    this.getAirportCities();
    this.getAirportGates();
    this.getDepartureStatus();
  }

  saveDeparture(){
    this.departureService.createDeparture(this.departure).subscribe(data => {
      console.log(data);
      this.goToDepartureList();
    }, error => console.log(error));
  }

  private getAirportCities(){
    this.departureService.getAirportCityList().subscribe(data => {
      this.airportCity = data;
    })
  }

  private getAirportGates(){
    this.departureService.getAirportGateList().subscribe(data => {
      this.airportGate = data;
    })
  }

  private getDepartureStatus(){
    this.departureService.getDepartureStatusList().subscribe(data => {
      this.departureStatus = data;
    })
  }

  goToDepartureList(){
    this.router.navigate([`/departures`])
  }

  onSubmit(){
    console.log(this.departure)
    this.saveDeparture();
  }

  get airlines(): string[] {
    return Array.from(this.airlineFlight.keys());
  }

  get flights(): string[] | undefined {
    return this.airlineFlight.get(this.departure.airline);
  }

}
