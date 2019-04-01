import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {



  private todoList: Array<{ taskName: string, done: boolean, id: number }> = [
    { taskName: "Tuer le lion de Ménée", done: false, id: 1 },
    { taskName: "Nettoyer les écuries d\'Augias", done: true, id: 2 }
  ];
  //Déclaration de l'objet task qui permettra l'ajout de nouvelle task a la todoList
  private task = {
    taskName: null,
    done: false,
    id: null
  }

  constructor() {

  }
  //methode qui récupére la todoList
  public getData() {
    return this.todoList;
  }
  //methode qui crée un nouvelle objet task 
  public getNewTask() {
    this.task.id = (new Date()).getTime();
    return this.task;
  }
  //methode qui verifie si la saisie n'est pas null
  isValide(): boolean {
    return this.task.taskName && this.task.id;
  }
  //methode qui ajout une task
  addTask() {
    this.todoList.push(this.task);
  }
}
