import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'currency-calculator';

  passedValue1 = 0;
  passedValue2 = 0;

  onValueChange1(value: number): void {
    this.passedValue2 = value;
    console.log(value);
  }

  onValueChange2(value: number): void {
    this.passedValue1 = value;
  }
}
