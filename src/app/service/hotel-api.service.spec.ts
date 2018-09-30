import { TestBed, inject } from '@angular/core/testing';

import { HotelAPIService } from './hotel-api.service';

describe('HotelAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HotelAPIService]
    });
  });

  it('should be created', inject([HotelAPIService], (service: HotelAPIService) => {
    expect(service).toBeTruthy();
  }));
});
