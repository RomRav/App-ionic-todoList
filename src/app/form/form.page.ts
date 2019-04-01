import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
private todoAdd;
  constructor() { }

  ngOnInit() {
  }


  private recTodo(){
    let ConstAddTodo: Array<{ taskName: string, done: boolean, id: number }> =[
      taskName: this.todoAdd,
      done: false,
      id:
    ]
  }
}
