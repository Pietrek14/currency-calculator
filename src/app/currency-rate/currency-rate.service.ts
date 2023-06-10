import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyRateService {

  CURRENCIES = [
    { name: 'PLN', rate: 1.0 },
    { name: 'USD', rate: 4.13 },
    { name: 'EUR', rate: 4.44 },
    { name: 'PHP', rate: 0.074 },
  ];

  constructor() { }

  getRate(currencyName: string): number {
    const currency = this.CURRENCIES.find(c => c.name === currencyName);

    if(!currency) throw new Error(`Currency not found {currencyName}`);

    return currency.rate;
  }

  getCurrencyNames(): string[] {
    return this.CURRENCIES.map(c => c.name);
  }
}
