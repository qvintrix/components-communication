import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Todo } from '../todo/todo.interface';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {
  @Input() showTodos: string;
  @Output() todoAdded = new EventEmitter<Todo>();

  title: string;
  description: string;

  addTodo() {
    if (this.title && this.description) {
      this.todoAdded.emit({
        title: this.title,
        description: this.description
      });
    }
  }
}
