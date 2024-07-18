import { Images } from './../../models/placeholder.model';
import { error } from 'console';
import { CrudService } from './../../services/crud.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent {
  images: Images;
  erro: any;

  constructor(private crudService:CrudService){
    this.getter();
  }

  getter(){
    this.crudService.getFotos().subscribe(
      (data: Images) => {
        this.images = data;
        console.log('O dado recebido:', data);
        console.log('A variavel preenchida', this.images);
    }, error => {
      this.erro = error;
      console.error('Erro: ', error);
    })
  }
}
