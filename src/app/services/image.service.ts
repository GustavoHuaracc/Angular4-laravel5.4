import { Injectable } from '@angular/core';
import {Image} from '../models/image'
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import  {Observable} from 'rxjs/Rx';
@Injectable()
export class ImageService {
  /*images: Image[]=[
    new Image('1','Primera Imagen','Descripcion de la primera IMG','http://linhd.es/wp-content/uploads/2014/03/inicio2-300x200.jpg'),
    new Image('1','Primera Imagen','Descripcion de la primera IMG','http://linhd.es/wp-content/uploads/2014/03/inicio2-300x200.jpg'),
    new Image('1','Primera Imagen','Descripcion de la primera IMG','http://linhd.es/wp-content/uploads/2014/03/inicio2-300x200.jpg'),
    new Image('1','Primera Imagen','Descripcion de la primera IMG','http://linhd.es/wp-content/uploads/2014/03/inicio2-300x200.jpg'),
    new Image('1','Primera Imagen','Descripcion de la primera IMG','http://linhd.es/wp-content/uploads/2014/03/inicio2-300x200.jpg'),
    new Image('1','Primera Imagen','Descripcion de la primera IMG','http://linhd.es/wp-content/uploads/2014/03/inicio2-300x200.jpg'),
    new Image('1','Primera Imagen','Descripcion de la primera IMG','http://linhd.es/wp-content/uploads/2014/03/inicio2-300x200.jpg'),
    new Image('1','Primera Imagen','Descripcion de la primera IMG','http://linhd.es/wp-content/uploads/2014/03/inicio2-300x200.jpg'),
    new Image('1','Primera Imagen','Descripcion de la primera IMG','http://linhd.es/wp-content/uploads/2014/03/inicio2-300x200.jpg'),
    new Image('1','Primera Imagen','Descripcion de la primera IMG','http://linhd.es/wp-content/uploads/2014/03/inicio2-300x200.jpg'),
    new Image('1','Primera Imagen','Descripcion de la primera IMG','http://linhd.es/wp-content/uploads/2014/03/inicio2-300x200.jpg'),
    new Image('1','Primera Imagen','Descripcion de la primera IMG','http://linhd.es/wp-content/uploads/2014/03/inicio2-300x200.jpg'),
  
  ];*/

  constructor(private http:Http) {

   }
    /*getImages(){
      return this.images;
    }*/
    getImages():Observable<Image[]>{
      return this.http.get('http://127.0.0.1:8000/api/v1/images').map((response:Response)=> response.json());
    }
}
