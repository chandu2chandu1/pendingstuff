import { Component, OnInit } from '@angular/core';
import { ToDoList } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-my-todos',
  templateUrl: './my-todos.component.html',
  styleUrls: ['./my-todos.component.css']
})
export class MyTodosComponent implements OnInit {

  myToDoList: ToDoList[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.myToDoList = this.todoService.getMyToDoList();
  }

}
