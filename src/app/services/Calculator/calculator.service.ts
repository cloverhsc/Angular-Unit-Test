import { LoggerService } from './../Logger/logger.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private loggerService: LoggerService) {}
  add(n1: number, n2: number): number {
    let result = n1 + n2;
    this.loggerService.log(`Add operation is called with ${n1} and ${n2}`);
    return result;
  }

  subtract(n1: number, n2: number): number {
    let result = n1 - n2;
    this.loggerService.log(`Subtract operation is called with ${n1} and ${n2}`);
    return result;
  }
}
