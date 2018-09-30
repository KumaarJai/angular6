import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelAPIService } from '../../service/hotel-api.service';
import { Hotel } from '../../models/hotel';
import { HotelDetail } from '../../models/hotelDetail';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {
  hotelName: String;
  hotelDetails: HotelDetail;
  constructor(private route: ActivatedRoute, private service: HotelAPIService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
        console.log(params); // {name: "Studio 6"}
        this.hotelName = params.name;
        console.log(this.hotelName); // Studio 6
        this.getHotelDetailsByName();
      });
  }

  getHotelDetailsByName() {
    this.service.getHotelDetailsByName(this.hotelName).subscribe((data) => {
      this.hotelDetails = data;
      console.log(this.hotelDetails);
    });
  }

}
