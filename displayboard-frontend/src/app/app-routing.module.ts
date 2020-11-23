import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartureListComponent } from './departure-list/departure-list.component';
import { CreateDepartureComponent } from './create-departure/create-departure.component';
import { ArrivalListComponent } from './arrival-list/arrival-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'app',pathMatch:'full'},
  {path: 'departures', component: DepartureListComponent},
  {path: 'arrivals', component: ArrivalListComponent},
  {path: 'create-departure', component: CreateDepartureComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
