import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ICliente } from '../cliente';

@Component({
  imports: [CommonModule, ReactiveFormsModule], 
  selector: 'app-ventas',
  styleUrl: './ventas.css',
  templateUrl: './ventas.html',
})
export class Ventas implements OnInit {
  clientes: ICliente[] = [];

  formulario!: FormGroup;
  indiceEditando: number | null = null; 
  mensaje = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    const datos = localStorage.getItem('clientes');
    if (datos) {
      this.clientes = JSON.parse(datos);
    }

    this.formulario = new FormGroup({
      nombre: new FormControl('', Validators.required),
      cantidadCompradores: new FormControl('', [Validators.required, Validators.min(1)]),
      tarjetacineco: new FormControl('Si', Validators.required),
      cantidadBoletos: new FormControl('', [Validators.required, Validators.min(1)]),
    });
  }

  editar(indice: number): void {
    const venta = this.clientes[indice];
    this.indiceEditando = indice;
    this.mensaje = '';
    this.formulario.patchValue({
      nombre: venta.nombre,
      cantidadCompradores: venta.cantidadCompradores,
      tarjetacineco: venta.tarjetacineco,
      cantidadBoletos: venta.cantidadBoletos,
    });
  }

  
  guardar(): void {
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

    this.clientes[this.indiceEditando!] = {
      nombre,
      cantidadCompradores,
      tarjetacineco,
      cantidadBoletos,
      total: Math.round(total),
    };

    localStorage.setItem('clientes', JSON.stringify(this.clientes));
    this.cancelar();
  }

 
  cancelar(): void {
    this.indiceEditando = null;
    this.mensaje = '';
  }

  volver(): void {
    this.router.navigate(['/escuela/cinepolis']);
  }

  
  eliminar(indice: number): void {
    this.clientes.splice(indice, 1);
    localStorage.setItem('clientes', JSON.stringify(this.clientes));
  }
  
}