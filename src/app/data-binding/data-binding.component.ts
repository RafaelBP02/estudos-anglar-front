import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent implements OnInit {
  numero: number = 0;

  constructor(){
  }
  ngOnInit() {
  }

  onInputChange(event: any) {
    this.numero = event.target.value;
  }
}
