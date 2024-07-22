import { Component } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrl: './myform.component.css'
})
export class MyformComponent {
  data: any;
  perfil = new FormGroup({
    nome: new FormControl(''),
    idade: new FormControl(''),
    cidade: new FormControl(''),
  });

  constructor(){}

  obterDados(){
    this.data= this.perfil.value;
  }
}
