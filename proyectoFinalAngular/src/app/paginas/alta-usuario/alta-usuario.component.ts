import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from '../../shared/modelos/usuario.model';
import { PeticionesService } from '../../shared/servicios/peticiones.service';
@Component({
  selector: 'app-alta-usuario',
  templateUrl: './alta-usuario.component.html',
  styleUrls: ['./alta-usuario.component.css']
})
export class AltaUsuarioComponent implements OnInit {
  @ViewChild('contenido', { static: false }) contenidoModal: NgbModalRef;
  modalRef: NgbModalRef;
  formulario: FormGroup;
  usuario: Usuario;
  existeUsuario: boolean = false;
  altaCorrecta: boolean = false;

  constructor(private peticionesService: PeticionesService, private router: Router, private ruta: ActivatedRoute, private modal: NgbModal) { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      'nombreUsuario': new FormControl(null, Validators.required),
      'correo': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required),
      'nombre': new FormControl(null),
      'apellidos': new FormControl(null),
      'visible': new FormControl(null)
    });

  }

  guardarNuevoUsuario() {
    let idUsuario = this.formulario.get('nombreUsuario').value;
    let visibilidad = (this.formulario.get('visible').value == true) ? 1 : 0;

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
    this.peticionesService.insertarNuevoUsuario(this.usuario).subscribe(
      response => {
        this.existeUsuario = false;
        this.altaCorrecta = true;
        this.abrirModal();
        this.volverAInicio();
      },
      error => {
        this.existeUsuario = true;
      }
    );

  }

  volverAInicio() {
    setTimeout(() => {
      this.modalRef.close();
      this.router.navigate(['../'], { relativeTo: this.ruta });
    }, 2000);
  }

  abrirModal() {
    this.modalRef = this.modal.open(this.contenidoModal, { size: 'md', centered: true });
  }

}
