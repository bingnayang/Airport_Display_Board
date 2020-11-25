import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartureListComponent } from './departure-list/departure-list.component';
import { CreateDepartureComponent } from './create-departure/create-departure.component';
import { ArrivalListComponent } from './arrival-list/arrival-list.component';
import { UpdateDepartureComponent } from './update-departure/update-departure.component';
import { CreateArrivalComponent } from './create-arrival/create-arrival.component';
import { UpdateArrivalComponent } from './update-arrival/update-arrival.component';

const routes: Routes = [
  {path: '', redirectTo: 'app',pathMatch:'full'},
  {path: 'departures', component: DepartureListComponent},
  {path: 'create-departure', component: CreateDepartureComponent},
  {path: 'update-departure/:id', component: UpdateDepartureComponent},
  {path: 'arrivals', component: ArrivalListComponent},
  {path: 'create-arrival', component: CreateArrivalComponent},
  {path: 'update-arrival/:id', component: UpdateArrivalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
