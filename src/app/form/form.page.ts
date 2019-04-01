import { Component, OnInit, ɵConsole } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  private todoAdd;
  //
  constructor(
    private todoService: TodoService,
    //Injection de la class Router pour permettre un routage vers une autre page
    private router: Router,
    //Injection de la class Storage pour permettre la sauvegarde des données
    private storage: Storage,
    //Injection de la class ActivatedRoute pour permettre de récupérer la variable transmise via l'URL
    private activeRoute: ActivatedRoute
  ) { }


  //A l'initialisation on instancie un nouvel objet todo dans la variable todoAdd
  ngOnInit() {
    let pos = this.activeRoute.snapshot.paramMap.get("pos");
    if (pos) {
      this.storage.get("todo-List").then((data) => {
        this.todoAdd = data[pos];
      }
      )
    }
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
