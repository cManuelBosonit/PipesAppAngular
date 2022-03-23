import { Component} from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

  //i18nSelect
  nombre: string = 'Susana';
  genero: string = 'femenino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla',
  }
  
  //i18nPlural

  clientes: string[] = ['Maria', 'Pedro', 'Fernando', 'Raul'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando',

  }

  cambiarCliente(){
    this.nombre = 'Pedro';
    this.genero = 'masculino'
  }

  borrarCliente(){
    this.clientes.pop();
  }

  //KeyValue Pipe

  persona = {
    nombre : 'Manuel',
    edad: 34,
    direccion: 'Madrid, España'
  }

  //Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Acuaman',
      vuela: false
    }
  ]

  //Async Pipe
  miObservable = interval(2000); // 0,1,2,3,4,5,

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa')
    },3500);
  });

}
