import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  private todoList;
  //Dans le constructor passe en paramétre les class TodoService et Storage pour la persistance 
  constructor(private todoService: TodoService, private storage: Storage, private router: Router) {
  }

  ionViewWillEnter(): void {

    this.storage.get("todo-List").then((data) => {

      this.todoList = data || [];
    });
  }

  private delete(pos) {
    //supprimer la tâche
    this.todoList.splice(pos, 1);
    //sauvegarde 
    this.storage.set('todo-List', this.todoList);
  }

  private showUpdateForm(pos) {
    this.router.navigateByUrl("/form/" + pos);

  }

}

