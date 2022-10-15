import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{titulo}}</h1>
        <h1>{{1+1}}</h1>
        <h3>La base es: <strong> {{base}} </strong></h3>
        
        <!-- <button (click)=" numero = numero +1;"> +1 </button> -->
        <button (click)="acumular(base)"> {{base}} </button>
        
        <span>{{numero}}</span>
        
        <!-- <button (click)="numero = numero -1;"> -1 </button> -->
        <button (click)="acumular(-base)"> -{{base}}</button>
    `
})

//export porque se va a utilizar afuera
export class ContadorComponent{

    public titulo = 'Contador App';
  public numero: number = 10;

  // sumar () {
  //   this.numero += 1; 
  // }

  // restar () {
  //   this.numero -= 1; 
  // }

  public base: number = 5;

  acumular(valor: number){
    this.numero += valor;
  }

}