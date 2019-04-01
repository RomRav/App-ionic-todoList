import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todoList: Array<{ taskName: string, done: boolean, id: number }> = [
    { taskName: "Tuer le lion de Ménée", done: false, id: 1 },
    { taskName: "Nettoyer les écuries d\'Augias", done: true, id: 2 }
  ];

  constructor() {
    
  }

  public getData() {
    return this.todoList;
  }
}
