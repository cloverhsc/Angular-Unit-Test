/* import { TestBed } from '@angular/core/testing';

import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  let service: LoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
 */

import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  let service: LoggerService;
  beforeEach(() => {
    // arrange
    service = new LoggerService();
  });
  it('Should not have any messages at starting', () => {
    // act
    let count = service.messages.length;

    // assert
    expect(count).toBe(0);
  });

  it('Should add message when log is called', () => {

    // act
    service.log('Hello World');

    // assert
    expect(service.messages.length).toBe(1);
  });

  it('Should remove all messages when clear is called', () => {
    // arrange
    service.log('Hello World');

    // act
    service.clear();

    // assert
    expect(service.messages.length).toBe(0);
  })
});
