import { Injectable } from '@angular/core';
import { FakeToDoList, ToDoList } from './todo.model';

@Injectable()
export class TodoService {

  constructor() { }

  getMyToDoList(): ToDoList[] {
    let myList = new FakeToDoList();
    return myList.getToDoList();
  }

  getItems() {
    
  }
  
  markItemComplete(listId: number, item:number) {
    
  }

  removeItem(listId:number, item:number) {
    
  }

  removeList(listId: number) {
    
  }

}
