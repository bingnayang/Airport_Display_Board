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

@NgModule({
  declarations: [
    AppComponent,
    DepartureListComponent,
    BoardListComponent,
    ArrivalListComponent,
    CreateDepartureComponent
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
