import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CurrencyRateService } from '../currency-rate/currency-rate.service';

@Component({
  selector: 'app-currency-input',
  templateUrl: './currency-input.component.html',
  styleUrls: ['./currency-input.component.css']
})
export class CurrencyInputComponent implements OnInit {

  rawInput = '0';
  input = 0;
  selectedCurrency = 'PLN';

  @Input()
  set foreignValue(value: number) {
    this.input = +(value / this.currencyRateService.getRate(this.selectedCurrency)).toFixed(2);
    this.rawInput = this.input.toString();
  }

  @Output() absoluteValue = new EventEmitter<number>();

  constructor(private currencyRateService: CurrencyRateService) { }

  ngOnInit(): void {
  }

  validate(): void {
    // idk how this works, it works, i dont want to touch it anymore
    // i hate javascript

    if(this.rawInput === '') {
      this.rawInput = '0';
    }

    let firstNonZeroIndex = -1;
    for(let i = 0; i < this.rawInput.length; i++) {
      if(this.rawInput[i] !== '0') {
        firstNonZeroIndex = i;
        break;
      }
    }

    if(firstNonZeroIndex !== -1) {
      this.rawInput = this.rawInput.slice(firstNonZeroIndex);
    } else {
      this.rawInput = '0';
    }

    const parsedInput = +this.rawInput;

    if(isNaN(parsedInput) || parsedInput < 0) {
      this.rawInput = this.input.toString();
    } else {
      this.input = parsedInput;
    }

    this.updateAbsoluteValue();
  }

  currencyNames(): string[] {
    return this.currencyRateService.getCurrencyNames();
  }

  updateAbsoluteValue() {
    const absoluteValue = this.input * this.currencyRateService.getRate(this.selectedCurrency);

    this.absoluteValue.emit(absoluteValue);
  }

}
