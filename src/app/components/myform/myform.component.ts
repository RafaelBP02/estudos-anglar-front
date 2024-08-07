import { Component } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { Client } from '../../models/Client';
import { ClientService } from '../../services/client.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrl: './myform.component.css'
})
export class MyformComponent {

  showBtn: boolean = true;
  showTable: boolean = true;

  clients:Client[]= [];
  formData = new Client();

  constructor(private service:ClientService){}


  selectAllClients():void{
    this.service.selectClients()
    .subscribe(c => this.clients = c);
  }

  selectClient(pos:number):void{
    this.formData = this.clients[pos];

    this.showBtn = false;
    this.showTable = false;
  }

  editClient():void{
    this.service.editClient(this.formData)
    .subscribe(ed => {
      let pos = this.clients.findIndex(obj =>{
        return obj.codigo ==  ed.codigo;
      });

      this.clients[pos] = ed;

      this.showBtn = true;
      this.showTable = true;

      alert('cliente alterado com sucesso');

    });
  }

  deleteClient():void{
    this.service.deleteClient(this.formData.codigo)
    .subscribe(ed => {
      let pos = this.clients.findIndex(obj =>{
        return obj.codigo == this.formData.codigo;
      });

      this.clients.splice(pos, 1);

      this.formData = new Client();

      this.showBtn = true;
      this.showTable = true;

      alert('cliente removido com sucesso');

    });
  }

  registerClient():void{
    this.service.registerClient(this.formData)
    .subscribe(fd => {
      this.clients.push(fd);

      this.formData = new Client();

      alert('Cliente cadastrado com sucesso')
    });
  }


  cancelOperation():void{
    this.formData = new Client();

    this.showBtn = true;
    this.showTable = true;
  }

  ngOnInit(){
    this.selectAllClients();
  }
}
