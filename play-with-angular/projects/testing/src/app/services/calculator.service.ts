import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private loggerService: LoggerService) { }

  add(a: number, b: number): number {
    this.loggerService.log("add() invoked")
    return a + b;
  }
  subtract(a: number, b: number): number {
    this.loggerService.log("subtract() invoked")
    return a - b;
  }


}
