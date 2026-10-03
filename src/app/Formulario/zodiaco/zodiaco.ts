import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-zodiaco',
  standalone: true,
  imports: [FormsModule],
  styleUrls: ['./zodiaco.css'],
  templateUrl: './zodiaco.html',
})
export class Zodiaco {

  nombrePersona: string = '';
  apellidoPat: string = '';
  apellidoMat: string = '';
  diaNac: number = 0;
  mesNac: number = 0;
  anioNac: number = 0;
  genero: string = '';

  nombreMostrado: string = '';
  patMostrado: string = '';
  matMostrado: string = '';
  generoMostrado: string = '';
  edadActual: number = 0;
  animalChino: string = '';
  fotoAnimal: string = '';

  mostrarDatos(): void {

    this.nombreMostrado = this.nombrePersona;
    this.patMostrado = this.apellidoPat;
    this.matMostrado = this.apellidoMat;
    this.generoMostrado = this.genero;

    let hoy = new Date();
    let anioHoy = hoy.getFullYear();

    this.edadActual = anioHoy - this.anioNac;

    if (
      this.mesNac > hoy.getMonth() + 1 ||
      (this.mesNac == hoy.getMonth() + 1 && this.diaNac > hoy.getDate())
    ) {
      this.edadActual--;
    }

    if (this.anioNac % 12 == 4) {
      this.animalChino = 'Rata';
      this.fotoAnimal = 'https://www.horoscopochino.eu/assets/img/zodiaco/s/rata.jpg';

    } else if (this.anioNac % 12 == 5) {
      this.animalChino = 'Buey';
      this.fotoAnimal = 'https://www.horoscopochino.eu/assets/img/zodiaco/s/buey.jpg';

    } else if (this.anioNac % 12 == 6) {
      this.animalChino = 'Tigre';
      this.fotoAnimal = 'https://www.horoscopochino.eu/assets/img/zodiaco/s/tigre.jpg';

    } else if (this.anioNac % 12 == 7) {
      this.animalChino = 'Conejo';
      this.fotoAnimal = 'https://www.horoscopochino.eu/assets/img/zodiaco/s/conejo.jpg';

    } else if (this.anioNac % 12 == 8) {
      this.animalChino = 'Dragón';
      this.fotoAnimal = 'https://www.horoscopochino.eu/assets/img/zodiaco/s/dragon.jpg';

    } else if (this.anioNac % 12 == 9) {
      this.animalChino = 'Serpiente';
      this.fotoAnimal = 'https://www.horoscopochino.eu/assets/img/zodiaco/s/serpiente.jpg';

    } else if (this.anioNac % 12 == 10) {
      this.animalChino = 'Caballo';
      this.fotoAnimal = 'https://www.horoscopochino.eu/assets/img/zodiaco/s/caballo.jpg';

    } else if (this.anioNac % 12 == 11) {
      this.animalChino = 'Cabra';
      this.fotoAnimal = 'https://www.horoscopochino.eu/assets/img/zodiaco/s/cabra.jpg';

    } else if (this.anioNac % 12 == 0) {
      this.animalChino = 'Mono';
      this.fotoAnimal = 'https://www.horoscopochino.eu/assets/img/zodiaco/s/mono.jpg';

    } else if (this.anioNac % 12 == 1) {
      this.animalChino = 'Gallo';
      this.fotoAnimal = 'https://www.horoscopochino.eu/assets/img/zodiaco/s/gallo.jpg';

    } else if (this.anioNac % 12 == 2) {
      this.animalChino = 'Perro';
      this.fotoAnimal = 'https://www.horoscopochino.eu/assets/img/zodiaco/s/perro.jpg';

    } else {
      this.animalChino = 'Cerdo';
      this.fotoAnimal = 'https://www.horoscopochino.eu/assets/img/zodiaco/s/cerdo.jpg';
    }
  }
}