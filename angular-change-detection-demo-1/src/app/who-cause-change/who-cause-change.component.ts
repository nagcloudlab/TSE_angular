import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-who-cause-change',
  templateUrl: './who-cause-change.component.html',
  styleUrls: ['./who-cause-change.component.css']
})
export class WhoCauseChangeComponent implements OnInit {


  message: string = 'Hello Angular';
  todos: Array<any> = []
  time: string = new Date().toLocaleTimeString()

  changeMessage() {
    this.message = 'Hello Kongs';
  }

  loadTodos() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=1")
      .then(response => response.json())
      .then(todos => {
        this.todos = todos
      })
  }

  startTimer() {
    setInterval(() => {
      this.time = new Date().toLocaleTimeString()
    }, 1000);
  }



  ngOnInit(): void {
  }

}
