import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  messages: Array<string> = []

  constructor() { }

  log(message: string) {
    this.messages.push(message);
  }
  clear() {
    this.messages = [];
  }

}
