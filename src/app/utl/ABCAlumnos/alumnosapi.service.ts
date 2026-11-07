import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AlumnosUtl } from "./alumnosUTL";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class ProyectoapiService{
    constructor(private http:HttpClient) { }

public getAlumnos():Observable<AlumnosUtl[]>{
    /*el observable espera por la informacion para contruir un arreglo*/
    return this.http.get<AlumnosUtl[]>
    ('http://127.0.0.1:5000/api/alumnos/')
    }

agregarNuevoAlumno(datos:any){
  return this.http.post('http://127.0.0.1:5000/api/alumnos/',
    datos)
}
 
public getAlumno(mat:string):Observable<any>{
  console.log("matricula"+ mat)
  return this.http.get<any>(`http://127.0.0.1:5000/api/alumnos/${mat}`)
}
 
modificarAlumno(mat:number,datos:AlumnosUtl){
  return this.http.put('http://127.0.0.1:5000/api/alumnos/'+mat,datos)
}
 
public EliminaAlumno(mat:number):Observable<AlumnosUtl>{
  return this.http.delete<AlumnosUtl>('http://127.0.0.1:5000/api/alumnos/'+mat)
}


}