import { MaestrosUtl } from '../maestrosUTL';
import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProyectoapiService } from '../maestrosapi.service';
import { MaestroFilterPipe } from '../maestros-filter.pipe';
import { CommonModule } from '@angular/common';

@Component({
  imports: [FormsModule, RouterLink, MaestroFilterPipe, CommonModule],
  selector: 'app-maestros',
  templateUrl: './maestros.html',
})
export class Maestros implements OnInit {

  listFilter: string = ''
  maestroTitle!: string
  dataSource: any = [];
  /*datasource guarda la respuesta del API: { maestros: [...] }*/

  muestraImagen: boolean = false;

  constructor(public maestrosUtl: ProyectoapiService, private router: Router) {}

  maestrosIric: MaestrosUtl[] = [
    {
      idmaestro: 1,
      nombre: 'pedro',
      apaterno: 'lopez',
      amaterno: 'muñoz',
      correo: 'pedro@gmail.com',
    }
  ]

  ngOnInit(): void {
    this.cargarMaestros();
  }

  showImage(): void { this.muestraImagen = !this.muestraImagen; }

  cargarMaestros(): void {
    this.maestrosUtl.getMaestros().subscribe({
      /*subscribe hace un retardo a fin de que reciba la informacion para pintar en el navegador*/

      next: (response: any) => {
        console.log('Datos recibidos del API:', response);
        this.dataSource = response;
      },
      error: (error) => {
        console.error('Error al consultar el API:', error);
      },

      complete: () => {
        console.log('Carga de maestros finalizada');
      }
    });
  }

  agregarMaestro(): void {
    this.router.navigate(['/utl/agregar-maestro']);
  }

  editarMaestro(id: number): void {
    this.router.navigate(['/utl/editar-maestro', id]);
  }

  eliminarMaestro(id: number): void {
    this.router.navigate(['/utl/eliminar-maestro', id]);
  }
}