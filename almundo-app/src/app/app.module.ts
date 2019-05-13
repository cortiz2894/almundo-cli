import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { HotelService } from './services/hotel.service';
import { AppComponent } from './app.component';
import { HotelListComponent } from './components/hotel-list/hotel-list.component';
import { FiltroComponent } from './components/filtro/filtro.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent,
    FiltroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HotelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
