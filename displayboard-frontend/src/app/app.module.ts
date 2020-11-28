import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartureListComponent } from './departure-list/departure-list.component';
import { BoardListComponent } from './board-list/board-list.component';
import { ArrivalListComponent } from './arrival-list/arrival-list.component';
import { CreateDepartureComponent } from './create-departure/create-departure.component';
import { FormsModule } from '@angular/forms';
import { UpdateDepartureComponent } from './update-departure/update-departure.component';
import { CreateArrivalComponent } from './create-arrival/create-arrival.component';
import { UpdateArrivalComponent } from './update-arrival/update-arrival.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartureListComponent,
    BoardListComponent,
    ArrivalListComponent,
    CreateDepartureComponent,
    UpdateDepartureComponent,
    CreateArrivalComponent,
    UpdateArrivalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
