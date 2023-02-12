import { LoggerService } from '../Logger/logger.service';
import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  it('should add two numbers', () => {
    const loggerService = new LoggerService();
    const calculator = new CalculatorService(loggerService);
    let result = calculator.add(2, 2);
    expect(result).toBe(4);
  });
  it('should subtract two numbers', () => {
    const loggerService = new LoggerService();
    const calculator = new CalculatorService(loggerService);
    let result = calculator.subtract(2, 2);
    expect(result).toBe(0);
  });
});
