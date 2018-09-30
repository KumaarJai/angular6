import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-hotel',
  templateUrl: './search-hotel.component.html',
  styleUrls: ['./search-hotel.component.css']
})
export class SearchHotelComponent implements OnInit {
  locality: String;
  city: String;
  CityDisabled = false;
  LocalityDisabled = true;
  searchFlag: String;
  constructor() { }

  ngOnInit() {
  }

  handleSearchCriteria() {
    const criteria = this.searchFlag;
    if (criteria === 'zip') {
      this.CityDisabled = true;
    } else {
      this.LocalityDisabled = true;
    }

  }
}
