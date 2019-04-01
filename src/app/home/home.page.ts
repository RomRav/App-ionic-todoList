import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  private todoList;
  //Dans le constructor passe en paramétre les class TodoService et Storage pour la persistance 
  constructor(private todoService: TodoService, private storage: Storage) {
  }

  ngOnInit(): void {
    console.log("on init");
    this.storage.get("todo-List").then((data) => {
      console.log(data);
      this.todoList = data || [];
    });
  }
}

