import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";



describe('Calculator Service', () => {

  let calculatorService: CalculatorService;
  let loggerService: LoggerService;

  beforeEach(() => {
    //loggerService = new LoggerService(); 
    loggerService = jasmine.createSpyObj("LoggerService", ["log", "clear"]);
    calculatorService = new CalculatorService(loggerService);
  })

  it('should add two numbers', () => {
    expect(calculatorService.add(1, 2)).toBe(3);
    expect(loggerService.log).toHaveBeenCalledTimes(1)
  });
  it('should subtract two numbers', () => {
    expect(calculatorService.subtract(1, 2)).toBe(-1);
    expect(loggerService.log).toHaveBeenCalledTimes(1)
  });

})