import { MaestrosUtl } from '../maestrosUTL';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProyectoapiService } from '../maestrosapi.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MaestroFilterPipe } from '../maestros-filter.pipe';
import { CommonModule } from '@angular/common';

@Component({
  imports: [FormsModule, RouterLink, MaestroFilterPipe,CommonModule],
  selector: 'app-maestros',
  templateUrl: './maestros.html',
})
export class Maestros implements OnInit {
  listFilter:string=''
  maestroTitle!:string
  dataSource:MaestrosUtl[]=[];
  /*datasource es un arreglo*/
  
  constructor(public maestrosUtl:ProyectoapiService, private router: Router){}
  maestrosIric:MaestrosUtl[]=[
    {
    idmaestro:1,
    nombre:'pedro',
    apaterno:'lopez',
    amaterno:'muñoz',
    correo: 'pedro@gmail.com',
  
    }
  ]
  
  ngOnInit():void{
    this.cargarMaestros();
  }
  
  cargarMaestros():void{
    this.maestrosUtl.getMaestros().subscribe({
      /*subscribe hace un retardo a fin de que reciba la informacion para pintar en el navegador*/
  
      next: (response: MaestrosUtl[]) => {
        console.log('Datos recibidos del API:', response);
        this.dataSource = response;
    },
    error: (error) =>{
      console.error('Error al consultar el API:', error);
    },
  
    complete: () =>{
      console.log('Carga de maestros finalizada');
        }
  
      });
    }
}
