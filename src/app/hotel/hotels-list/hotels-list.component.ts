import { Component, OnInit, Input } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HotelAPIService } from '../../service/hotel-api.service';
import { Hotel } from '../../models/hotel';
import { HotelList } from '../../models/hotelList';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.css']
})
export class HotelsListComponent implements OnInit {

  Hotels: HotelList;
  constructor(private service: HotelAPIService) { }

  ngOnInit() {
    this.getAllHotels();
  }

  getAllHotels() {
    this.service.getAllHotelsFromAPI().subscribe((hotels) => {
        this.Hotels = hotels;
        console.log(this.Hotels);
    });
  }
}
