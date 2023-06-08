import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ExchangeRatesResponse} from 'src/app/services/payloads/exchange-rates-response';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class CurrencyExchangeService {

  constructor(private httpClient: HttpClient) {
  }

  getRates(access_key: string): Observable<ExchangeRatesResponse> {
    return this.httpClient.get<ExchangeRatesResponse>(`http://api.exchangeratesapi.io/v1/latest?access_key=${access_key}`);
  }
}
