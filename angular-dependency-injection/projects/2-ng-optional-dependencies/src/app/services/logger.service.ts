import { Injectable } from '@angular/core';
import { Logger } from '../interfaces/logger';

@Injectable()
export class LoggerService implements Logger {
  constructor() { }
  info(val: string) {
    this.saveLog(val, 'info');
  }
  error(val: string) {
    this.saveLog(val, 'error');
  }
  log(val: string) {
    this.saveLog(val, 'log');
  }
  warn(val: string) {
    this.saveLog(val, 'warn');
  }

  saveLog(val: string, type: string) {
    const key = `log_${type}`;
    const logs = JSON.parse(localStorage.getItem(key) || '[]');
    logs.push(val);
    localStorage.setItem(key, JSON.stringify(logs));
  }
}
