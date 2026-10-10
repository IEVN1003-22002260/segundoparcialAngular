import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IAlumno} from '../alumno';


@Component({
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  selector: 'app-lista-escuela',
  styleUrl: './lista-escuela.css',
  templateUrl: './lista-escuela.html',
})
export class ListaEscuela {
formulario!:FormGroup
alumnos:IAlumno[]=[]

nuevoAlumno:IAlumno={
  matricula: '',
  nombre: '',
  correo: '',
  materia: '',
}

  ngOnInit():void{
      this.cargarAlumnos()
      this.formulario=new FormGroup({
        matricula:new FormControl(''),
        nombre:new FormControl(''),
        correo:new FormControl(''),
        materia:new FormControl(''),
      })
  }

  agregarAlumno():void{
    if(
      this.nuevoAlumno.matricula === '' ||
      this.nuevoAlumno.nombre === '' ||
      this.nuevoAlumno.correo === '' ||
      this.nuevoAlumno.materia === '' 
    ){
      alert('Todos los campos son obligatorios');
      return;
    }
    //... se llama sprit
    this.alumnos.push({...this.nuevoAlumno}) //las llaves son porque es un objeto

    localStorage.setItem(//local storage es un almacenamiento temporal en el navegador del usuario
      'alumnos',//nombre de la variable tipo local storage
      JSON.stringify(this.alumnos)
    )
  }
  //llave propiedad y valor
//al arreglo se le agrega un objeto

  muestraAlumno():void{
    this.nuevoAlumno.matricula=this.formulario.value.matricula
    this.nuevoAlumno.nombre=this.formulario.value.nombre
    this.nuevoAlumno.correo=this.formulario.value.correo
    this.nuevoAlumno.materia=this.formulario.value.materia
    this.agregarAlumno()
  }

  cargarAlumnos():void{
    const datos = localStorage.getItem('alumnos');

    if (datos){
      this.alumnos = JSON.parse(datos);
    }
  }
}
