import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif-ngfor',
  templateUrl: './ngif-ngfor.component.html',
  styleUrl: './ngif-ngfor.component.css'
})
export class NgifNgforComponent {
  numero: number|null = 1;
  arrNumeros = [1, 2, 3, 4, 5, 6, 7];

  constructor(){

  }

  onInputChange(event: any) {
    const input = event.target as HTMLInputElement;
    this.numero = Number(input.value);
  }
}
