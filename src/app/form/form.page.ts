import { Component, OnInit, ɵConsole } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  public todoAdd;
  private pos;
  public pictureData;


  constructor(
    private todoService: TodoService,
    //Injection de la class Router pour permettre un routage vers une autre page
    private router: Router,
    //Injection de la class Storage pour permettre la sauvegarde des données
    private storage: Storage,
    //Injection de la class ActivatedRoute pour permettre de récupérer la variable transmise via l'URL
    private activeRoute: ActivatedRoute,
    //Injection de la class Camera pour gérer l'appareil photo 
    private camera: Camera
  ) { }


  //A l'initialisation on instancie un nouvel objet todo dans la variable todoAdd
  ngOnInit() {
    this.pos = this.activeRoute.snapshot.paramMap.get("pos");
    if (this.pos) {
      this.storage.get("todo-List").then((data) => {
        this.todoAdd = data[this.pos];
      }
      )
    }
    this.todoAdd = {
      taskName: null,
      done: false,
      id: null
    }


  }


  public recTodo() {
    if (this.todoAdd.taskName) {
      //récupération des données via storage
      this.storage.get("todo-List").then((data) => {
        let todoList = data || [];

        todoList[this.pos] = this.todoAdd;
        //Ajout ou modification en fonction de la valeur de pos
        if (this.pos) {
        } else {
          todoList.push(this.todoAdd);
        }

        this.storage.set("todo-List", todoList);

        this.router.navigateByUrl("/home");
      })
    };

  }

  takePicture() {
    const cameraOptions: CameraOptions = {
      //defini la qualité de la photo (60 = 60% de la qlté)
      quality: 60,
      //URI = universal resource identifieur
      //URL = universal resource locator
      destinationType: this.camera.DestinationType.FILE_URI,
      //defini la hauteur et largeur de la photo
      targetHeight: 500,
      targetWidth: 500,
      encodingType: this.camera.EncodingType.JPEG,
      //Defini le type de fichier (photo / video)
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(cameraOptions).then((cameraData) => {
      this.pictureData = cameraData;

    }, (err) => {
      console.log(err);
    })


  }
}
