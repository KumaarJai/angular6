import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { map, catchError, tap } from 'rxjs/operators';
import { HotelList } from '../models/hotelList';
import { Hotel } from '../models/hotel';
import { HotelDetail } from '../models/hotelDetail';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HotelAPIService {


  API_URL = 'http://localhost:8080/hackerHotel';
  constructor(private  http:  HttpClient) { }


  getAllHotelsFromAPI(): Observable<HotelList> {
    return this.http.get<HotelList>(this.API_URL + '/').pipe(
      map(data => data),
      catchError(this.handleError)
      );
  }

  getHotelDetailsByName(name: String): Observable<HotelDetail> {
    console.log('API URL:' + this.API_URL + '?name=' + name);
    return this.http.get<HotelDetail>(this.API_URL + '/getHotel?name=' + name).pipe(
      map(data => data),
      catchError(this.handleError)
      );
  }

  getHotelDetailsByCity(city: String): Observable<HotelList> {
    console.log('API URL:' + this.API_URL + '?city=' + city);
    return this.http.get<HotelList>(this.API_URL + '/hotelsByCity?city=' + city).pipe(
      map(data => data),
      catchError(this.handleError)
      );
  }

  getHotelDetailsByLocality(zip: String): Observable<HotelList> {
    console.log('API URL:' + this.API_URL + '?zip=' + zip);
    return this.http.get<HotelList>(this.API_URL + '/hotelsByLocality?zip=' + zip).pipe(
      map(data => data),
      catchError(this.handleError)
      );
  }

  handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
