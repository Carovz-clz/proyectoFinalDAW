import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class PeticionesService {

    constructor(private http: HttpClient){}

    insertarNuevoUsuario(nuevoUsuario){
       return this.http.post<any>('http://localhost:8080/checkproject/v1/usuarios', nuevoUsuario);
    }

    insertarNuevoProyecto(nuevoProyecto){
        console.log(nuevoProyecto);
        return this.http.post<any>('http://localhost:8080/checkproject/v1/proyectos', nuevoProyecto);
    }

    obtenerTodosLosProyectosDeUsuario(usuario){
        return this.http.get<any>('http://localhost:8080/checkproject/v1/proyectos/'+usuario);
    }

    eliminarProyectoPorId(id){
        return this.http.delete<any>('http://localhost:8080/checkproject/v1/proyectos/'+id);
    }

    obtenerDatosUsuario(usuario){
        return this.http.get<any>('http://localhost:8080/checkproject/v1/usuarios/'+usuario);
    }

    editarDatosUsuario(datosUsuario){
        return this.http.put<any>('http://localhost:8080/checkproject/v1/usuarios', datosUsuario);
    }
}