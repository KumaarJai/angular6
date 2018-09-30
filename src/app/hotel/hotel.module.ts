import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { HotelsListComponent } from './hotels-list/hotels-list.component';
import { HotelRoutingModule } from './hotel-routing.module';
import { HotelAPIService } from '../service/hotel-api.service';
import {DataTableModule} from 'angular-6-datatable';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { DisplayHotelsComponent } from './display-hotels/display-hotels.component';
import { SearchHotelComponent } from './search-hotel/search-hotel.component';

@NgModule({
  imports: [
    CommonModule,
    HotelRoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    DataTableModule
  ],
  providers : [HotelAPIService],
  declarations: [HotelsListComponent, HotelDetailsComponent, DisplayHotelsComponent, SearchHotelComponent]
})
export class HotelModule { }
