import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MaestrosUtl } from "./maestrosUTL";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class ProyectoapiService {
    constructor(private http: HttpClient) { }

    public getMaestros(): Observable<any> {
        /*el observable espera por la informacion para contruir un arreglo*/
        return this.http.get<any>('http://127.0.0.1:5000/api/maestros/')
    }

    agregarNuevoMaestro(datos: any) {
        return this.http.post('http://127.0.0.1:5000/api/maestros/', datos)
    }

    public getMaestro(id: string): Observable<any> {
        return this.http.get<any>(`http://127.0.0.1:5000/api/maestros/${id}`)
    }

    modificarMaestro(id: number, datos: MaestrosUtl) {
        return this.http.put('http://127.0.0.1:5000/api/maestros/' + id, datos)
    }

    public eliminaMaestro(id: number): Observable<any> {
        return this.http.delete<any>('http://127.0.0.1:5000/api/maestros/' + id)
    }

}