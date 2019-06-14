import { TestBed } from '@angular/core/testing';

import { ProductCodeService } from './product-code.service';

describe('ProductCodeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductCodeService = TestBed.get(ProductCodeService);
    expect(service).toBeTruthy();
  });
});
