import { Component, OnInit, ɵConsole } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  private todoAdd;
  //
  constructor(private todoService: TodoService, private router: Router, private storage: Storage) {

  }
  //A l'initialisation on instancie un nouvel objet todo dans la variable todoAdd
  ngOnInit() {
    this.todoAdd = {
      taskName: null,
      done: false,
      id: null
    }
  }


  private recTodo() {
    if (this.todoAdd.taskName) {
      //récupération des données via storage
      this.storage.get("todo-List").then((data) => {
        
        let todoList = data || [];
        todoList.push(this.todoAdd);
        this.storage.set("todo-List", todoList);
        this.router.navigateByUrl("/home");
      })
    };

  }
}
