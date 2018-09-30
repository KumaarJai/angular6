import { Hotel } from './hotel';
import { APIError } from './error';

export class HotelDetail {
  error: APIError;
  hotel: Hotel;
}
