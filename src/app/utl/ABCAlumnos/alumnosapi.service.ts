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
    ('http://127.0.0.1:5000/api/alumnos')
    }

    /* public getAlumnos2(): Observable<RespuestaAlumnos>{</RespuestaAlumnos>
} */

AgregarNuevoAlumno(datos:AlumnosUtl){
    return this.http.post('http://127.0.0.1:5000/alumnos', datos)
    }
}