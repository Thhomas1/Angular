import { TestBed } from '@angular/core/testing';

import { ProductoservService } from './productoserv.service';

describe('ProductoservService', () => {
  let service: ProductoservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductoservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
