import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelsListComponent } from './hotels-list/hotels-list.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { SearchHotelComponent } from './search-hotel/search-hotel.component';


const routes: Routes = [
  {path: '', redirectTo: 'hotels', pathMatch: 'full'},
  {path: 'hotels', component: HotelsListComponent},
  {path: 'details', component: HotelDetailsComponent},
  {path: 'by', component: SearchHotelComponent}
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class HotelRoutingModule { }
