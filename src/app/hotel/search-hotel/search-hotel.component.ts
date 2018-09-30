import { Component, OnInit } from '@angular/core';
import { HotelAPIService } from '../../service/hotel-api.service';
import { HotelList } from '../../models/hotelList';

@Component({
  selector: 'app-search-hotel',
  templateUrl: './search-hotel.component.html',
  styleUrls: ['./search-hotel.component.css']
})
export class SearchHotelComponent implements OnInit {
  locality: String;
  city: String;
  CityEnabled = false;
  LocalityEnabled = false;
  displayFlag = false;
  selectedCtiteria: String;

  hotels: HotelList;

  constructor(private service: HotelAPIService) { }

  ngOnInit() { }

  onChange(value) {
    console.log('Search Criteria : ' + value);
    const criteria = value;
    if (criteria === 'city') {
      this.CityEnabled = true;
      this.LocalityEnabled = false;
    } else if (criteria === 'zip') {
      this.LocalityEnabled = true;
      this.CityEnabled = false;
    }
  }

  SearchByCity() {
    if ( this.city === null || this.city === undefined) {
      alert('Please Enter city');
      this.displayFlag = false;
      return false;
    } else {
        this.service.getHotelDetailsByCity(this.city).subscribe(data => {
          this.hotels = data;
          this.displayFlag = true;
        });
    }
  }

  SearchByLocality() {
    if ( this.locality === null || this.locality === undefined) {
      alert('Please Enter locality');
      this.displayFlag = false;
      return false;
    } else {
        this.service.getHotelDetailsByLocality(this.locality).subscribe(data => {
          this.hotels = data;
          this.displayFlag = true;
        });
    }
  }
}
