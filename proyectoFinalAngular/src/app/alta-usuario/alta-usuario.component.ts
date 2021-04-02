import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../modelos/usuario.model';
import { PeticionesService } from '../servicios/peticiones.service';

@Component({
  selector: 'app-alta-usuario',
  templateUrl: './alta-usuario.component.html',
  styleUrls: ['./alta-usuario.component.css']
})
export class AltaUsuarioComponent implements OnInit {
  formulario: FormGroup;
  usuario: Usuario;
  existeUsuario: boolean = false;

  constructor(private peticionesService: PeticionesService) { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      'nombreUsuario': new FormControl(null, Validators.required),
      'correo': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required),
      'nombre': new FormControl(null),
      'apellidos': new FormControl(null),
      'visible': new FormControl(null)
    });

    this.peticionesService.obtenerTodosLosUsuarios();

  }

  guardarNuevoUsuario(){
    let idUsuario = this.formulario.get('nombreUsuario').value;    

    if(!this.comprobarSiUsuarioExiste(idUsuario)){
      let visibilidad = (this.formulario.get('visible').value != null) ? 1 : 0;

      this.usuario = {
        username: idUsuario,      
        pass: this.formulario.get('password').value,
        nombre: this.formulario.get('nombre').value,
        apellidos: this.formulario.get('apellidos').value,
        email: this.formulario.get('correo').value,      
        visible: visibilidad,
        enabled: 1
      } 
  
      console.log(this.usuario);  

      this.peticionesService.insertarNuevoUsuario(this.usuario);
      this.existeUsuario = false;
    }else{
      this.existeUsuario = true;
    }
    
  }

  comprobarSiUsuarioExiste(idUsuario){
    let indice = this.peticionesService.usuarios.findIndex( usuario => usuario.username === idUsuario) //Busco en array de usuarios si existe el usuario
    if(indice === -1){ //No existe el usuario
      return false;
    }else{
      return true;
    }
  }

}
