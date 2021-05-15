import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class PeticionesService {

    constructor(private http: HttpClient){}

    comprobarCredencialesLogin(usuario, pass){
        return this.http.get<any>('http://localhost:8080/checkproject/v1/usuarios/'+usuario+'/'+pass);
    }

    insertarNuevoUsuario(nuevoUsuario){
       return this.http.post<any>('http://localhost:8080/checkproject/v1/usuarios', nuevoUsuario);
    }
    
    obtenerDatosUsuario(usuario){
        return this.http.get<any>('http://localhost:8080/checkproject/v1/usuarios/'+usuario);
    }

    eliminarUsuario(usuario){
        return this.http.delete<any>('http://localhost:8080/checkproject/v1/usuarios/'+usuario);
    }

    insertarNuevoProyecto(nuevoProyecto){
        return this.http.post<any>('http://localhost:8080/checkproject/v1/proyectos', nuevoProyecto);
    }

    obtenerTodosLosProyectosDeUsuario(usuario){
        return this.http.get<any>('http://localhost:8080/checkproject/v1/proyectos/'+usuario);
    }

    obtenerSoloLosProyectosDeUsuarioPropietario(usuario){
        return this.http.get<any>('http://localhost:8080/checkproject/v1/proyectos/propietario/'+usuario);
    }

    eliminarProyectoPorId(id){
        return this.http.delete<any>('http://localhost:8080/checkproject/v1/proyectos/'+id);
    }


    editarDatosUsuario(datosUsuario){
        return this.http.put<any>('http://localhost:8080/checkproject/v1/usuarios', datosUsuario);
    }

    cambiarEstadoTarea(tarea){
        return this.http.put<any>('http://localhost:8080/checkproject/v1/tareas', tarea);
    }

    editarDatosProyecto(proyecto){
        return this.http.put<any>('http://localhost:8080/checkproject/v1/proyectos', proyecto);
    }

    obtenerTareasPorIdProyecto(id){
        return this.http.get<any>('http://localhost:8080/checkproject/v1/tareas/'+id);
    }

    eliminarTareaPorId(id){
        return this.http.delete<any>('http://localhost:8080/checkproject/v1/tareas/'+id);
    }

    obtenerTodosLosUsuarios(){
        return this.http.get<any>('http://localhost:8080/checkproject/v1/usuarios');
    }

    obtenerTodosLosUsuariosColaboresDeProyecto(idProyecto){
        return this.http.get<any>('http://localhost:8080/checkproject/v1/usuarios/proyectos/'+idProyecto);
    }

    agregarNuevoColaboradorAProyecto(usuarioProyecto){
        return this.http.post<any>('http://localhost:8080/checkproject/v1/usuarios/proyectos/', usuarioProyecto);
    }

    exportarAPdf(idProyecto){
        return this.http.get('http://localhost:8080/checkproject/v1/exportarpdf/'+idProyecto, { responseType: 'blob'  });
    }

}