import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ICliente } from '../cliente';

@Component({
  imports: [FormsModule, ReactiveFormsModule],
  selector: 'app-cinepolis',
  styleUrl: './cinepolis.css',
  templateUrl: './cinepolis.html',
})
export class Cinepolis {

  formulario!: FormGroup;

  nuevaCompra: ICliente = {
    nombre: '',
    cantidadCompradores: '',
    tarjetacineco: '',
    cantidadBoletos: '',
  };

  total: number = 0;
  descuento: number = 0;
  mensaje: string = '';

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      cantidadCompradores: new FormControl(''),
      tarjetacineco: new FormControl(''),
      cantidadBoletos: new FormControl(''),
    });
  }

  muestraResultado(): void {

    this.nuevaCompra.nombre = this.formulario.value.nombre;
    this.nuevaCompra.cantidadCompradores = this.formulario.value.cantidadCompradores;
    this.nuevaCompra.tarjetacineco = this.formulario.value.tarjetacineco;
    this.nuevaCompra.cantidadBoletos = this.formulario.value.cantidadBoletos;

    let compradores = Number(this.nuevaCompra.cantidadCompradores);
    let boletos = Number(this.nuevaCompra.cantidadBoletos);

    this.total = 0;
    this.descuento = 0;
    this.mensaje = '';

    if (compradores <= 0 || boletos <= 0) {
      this.mensaje = 'Ingresa cantidades válidas.';
    } else if (boletos > compradores * 7) {
      this.mensaje = 'No se pueden comprar más de 7 boletos por persona.';
    } else {

      this.total = boletos * 12;

      if (boletos > 5) {
        this.descuento = this.total * 0.15;
      } else if (boletos >= 3) {
        this.descuento = this.total * 0.10;
      }

      this.total = this.total - this.descuento;

     if (this.nuevaCompra.tarjetacineco === 'Si') {
        this.total = this.total * 0.90;
      }

      this.total = Math.round(this.total);
    }
  }
  salir(): void {
  window.location.reload();
}
}
