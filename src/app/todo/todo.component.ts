import { Component, Input } from '@angular/core';

import { Todo } from './todo.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  @Input() order: number;
  @Input() todo: Todo;
}
