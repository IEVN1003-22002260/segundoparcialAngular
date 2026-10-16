import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ICliente } from '../cliente';

@Component({
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  selector: 'app-cinepolis',
  styleUrl: './cinepolis.css',
  templateUrl: './cinepolis.html',
})
export class Cinepolis implements OnInit {
  formulario!: FormGroup;
  clientes: ICliente[] = [];

  nuevaCompra: ICliente = {
    nombre: '',
    cantidadCompradores: '',
    tarjetacineco: '',
    cantidadBoletos: '',
  };

  total = 0;
  descuento = 0;
  mensaje = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.cargarVentas();
    this.formulario = new FormGroup({
      nombre: new FormControl('', Validators.required),
      cantidadCompradores: new FormControl('', [Validators.required, Validators.min(1)]),
      tarjetacineco: new FormControl('Si', Validators.required),
      cantidadBoletos: new FormControl('', [Validators.required, Validators.min(1)]),
    });
  }

  muestraResultado(): void {
    this.total = 0;
    this.descuento = 0;
    this.mensaje = '';

    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      this.mensaje = 'Todos los campos son obligatorios y deben ser válidos.';
      return;
    }

    const { nombre, cantidadCompradores, tarjetacineco, cantidadBoletos } = this.formulario.value;
    const compradores = Number(cantidadCompradores);
    const boletos = Number(cantidadBoletos);

    if (boletos > compradores * 7) {
      this.mensaje = 'No se pueden comprar más de 7 boletos por persona.';
      return;
    }

    let total = boletos * 12;

    if (boletos > 5) {
      total -= total * 0.15;
    } else if (boletos >= 3) {
      total -= total * 0.10;
    }

    if (tarjetacineco === 'Si') {
      total *= 0.90;
    }

    this.total = Math.round(total);

    this.nuevaCompra = {
      nombre,
      cantidadCompradores,
      tarjetacineco,
      cantidadBoletos,
      total: this.total,
    };

    this.agregarCliente();
  }

  private agregarCliente(): void {
    this.clientes.push({ ...this.nuevaCompra });
    localStorage.setItem('clientes', JSON.stringify(this.clientes));
  }

  private cargarVentas(): void {
    const datos = localStorage.getItem('clientes');
    if (datos) {
      this.clientes = JSON.parse(datos);
    }
  }

  mostrarVentas(): void {
    this.router.navigate(['/escuela/ventas']);
  }

  salir(): void {
    window.location.reload();
  }
}