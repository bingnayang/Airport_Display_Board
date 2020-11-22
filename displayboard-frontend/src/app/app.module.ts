import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartureListComponent } from './departure-list/departure-list.component';
import { BoardListComponent } from './board-list/board-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartureListComponent,
    BoardListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
