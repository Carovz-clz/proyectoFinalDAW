import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Usuario } from "../modelos/usuario.model";

@Injectable({ providedIn: 'root' })
export class PeticionesService {
    usuarios = [];

    constructor(private http: HttpClient){}
    
    obtenerTodosLosUsuarios(){

         this.http.get<any>('http://localhost:8080/checkproject/v1/usuarios/')
            .subscribe(response => {              
                this.usuarios = response;
                console.log(this.usuarios);
            });  
    }

    insertarNuevoUsuario(nuevoUsuario){
       return this.http.post<any>('http://localhost:8080/checkproject/v1/usuarios/', nuevoUsuario);
    }
}