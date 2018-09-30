import { Hotel } from './hotel';
import { APIError } from './error';
export class HotelList {
  error: APIError;
  hotelList: Hotel[];
}
