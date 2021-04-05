import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class PeticionesService {

    constructor(private http: HttpClient){}

    insertarNuevoUsuario(nuevoUsuario){
       return this.http.post<any>('http://localhost:8080/checkproject/v1/usuarios/', nuevoUsuario);
    }

    insertarNuevoProyecto(nuevoProyecto){
        console.log(nuevoProyecto);
    }
}