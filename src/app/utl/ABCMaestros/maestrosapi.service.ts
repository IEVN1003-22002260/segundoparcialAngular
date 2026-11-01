import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MaestrosUtl } from "./maestrosUTL";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class ProyectoapiService{
    constructor(private http:HttpClient) { }

public getMaestros():Observable<MaestrosUtl[]>{
    /*el observable espera por la informacion para contruir un arreglo*/
    return this.http.get<MaestrosUtl[]>
    ('http://127.0.0.1:5000/api/maestros')
    }

    /* public getAlumnos2(): Observable<RespuestaAlumnos>{</RespuestaAlumnos>
} */

AgregarNuevoMaestro(datos:MaestrosUtl){
    return this.http.post('http://127.0.0.1:5000/maestros', datos)
    }
}