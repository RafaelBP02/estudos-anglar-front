import { Component } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { Client } from '../../models/Client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrl: './myform.component.css'
})
export class MyformComponent {

  btnCadastro: boolean = true;

  data: any;
  perfil = new FormGroup({
    nome: new FormControl(''),
    idade: new FormControl(''),
    cidade: new FormControl(''),
  });

  clients:Client[]= [];

  constructor(private service:ClientService){}


  selectClient():void{
    this.service.selectClients()
    .subscribe(c => this.clients = c);
  }

  obterDados():void{
    this.data= this.perfil.value;
  }
}
