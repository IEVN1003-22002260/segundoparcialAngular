import { AlumnosUtl } from '../alumnosUTL';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProyectoapiService } from '../alumnosapi.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AlumnoFilterPipe } from '../alumnos-filter.pipe';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-alumnos',
  imports: [FormsModule, RouterLink, AlumnoFilterPipe,CommonModule],
  templateUrl: './alumnos.html',
})
export class Alumnos implements OnInit {

listFilter:string=''
alumnoTitle!:string
dataSource:any=[];
/*datasource es un arreglo*/

constructor(public alumnosUtl:ProyectoapiService, private router: Router){}
alumnosIric:AlumnosUtl[]=[
  {
  matricula:1234,
  nombre:'pedro',
  apaterno:'lopez',
  amaterno:'muñoz',
  correo: 'pedro@gmail.com',

  }
]

ngOnInit():void{
  this.cargarAlumnos();
}

muestraImagen: boolean = false;
showImage(): void { this.muestraImagen = !this.muestraImagen; }

cargarAlumnos():void{
  this.alumnosUtl.getAlumnos().subscribe({
    /*subscribe hace un retardo a fin de que reciba la informacion para pintar en el navegador*/

    next: (response: AlumnosUtl[]) => {
      console.log('Datos recibidos del API:', response);
      this.dataSource = response;
  },
  error: (error) =>{
    console.error('Error al consultar el API:', error);
  },

  complete: () =>{
    console.log('Carga de alumnos finalizada');
      }

    });
  }

  agregarNuevoAlumno(): void {
  this.router.navigate(['/utl/agregar']);
}

editarAlumno(mat: number): void {
  this.router.navigate(['/utl/editar', mat]);
}

eliminarAlumno(mat: number): void {
  this.router.navigate(['/utl/eliminar', mat]);
}
}
