import { Component } from '@angular/core';

import { Todo } from './todo/todo.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos: Todo[];
  showTodos = true;

  constructor() {
    this.todos = [
      {
        title: 'Angular',
        description: 'Learn angular 6'
      },
      {
        title: 'RxJS',
        description: 'Learn RxJS'
      }
    ];
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  toggleShowTodosStatus() {
    this.showTodos = !this.showTodos;
  }
}
