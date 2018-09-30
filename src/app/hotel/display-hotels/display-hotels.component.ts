import { Component, OnInit, Input } from '@angular/core';
import { HotelList } from '../../models/hotelList';

@Component({
  selector: 'app-display-hotels',
  templateUrl: './display-hotels.component.html',
  styleUrls: ['./display-hotels.component.css']
})
export class DisplayHotelsComponent implements OnInit {
  @Input() public Hotels: HotelList;
  constructor() { }

  ngOnInit() {
  }

}
