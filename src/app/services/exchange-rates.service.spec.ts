import { TestBed } from '@angular/core/testing';

import { CurrencyExchangeService } from './exchange-rates.service';

describe('ExchangeRatesService', () => {
  let service: CurrencyExchangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencyExchangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
