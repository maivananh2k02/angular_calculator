import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  result?: string;
  input?: string ='';

  constructor() {
  }

  ngOnInit(): void {
  }

  clickCell(number: string) {
    this.input += number;
  }

  getResult() {
    return this.result=eval(<string>this.input);
  }
}
