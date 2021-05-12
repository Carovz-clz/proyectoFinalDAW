import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/shared/servicios/login.service';
import { PeticionesService } from 'src/app/shared/servicios/peticiones.service';

@Component({
  selector: 'app-modal-colaborador',
  templateUrl: './modal-colaborador.component.html',
  styleUrls: ['./modal-colaborador.component.css']
})
export class ModalColaboradorComponent implements OnInit, AfterViewInit {
  @ViewChild('contenido', { static: false }) contenidoModal: NgbModalRef;
  @Input() idProyecto = 0;
  @Output() pararColaboradores = new EventEmitter<void>();
  modalRef: NgbModalRef;
  colaboradorSelect = '';
  usuariosDisponibles = [];
  colaboradores: any = [];

  constructor(private modal: NgbModal, private peticionesService: PeticionesService, private loginService: LoginService) { }

  ngOnInit(): void {

    this.peticionesService.obtenerTodosLosUsuariosColaboresDeProyecto(this.idProyecto)
    .subscribe( response => {
      this.colaboradores = response;
      console.log(response);
    });

    this.peticionesService.obtenerTodosLosUsuarios()
    .subscribe( response => {
      response.forEach(element => {
        if( (element.visible === 1) && (this.loginService.getUsuario() != element.username)){
          this.usuariosDisponibles.push(element);
        }
      });
    });
  }

  ngAfterViewInit() {
    this.abrirModal();
  }

  abrirModal() {
    this.modalRef = this.modal.open(this.contenidoModal, { size: 'md', centered: true });
  }

  agregarColaborador(){
    this.peticionesService.agregarNuevoColaboradorAProyecto(
      {
        idProyecto: this.idProyecto,
        username: this.colaboradorSelect
      }
    ).subscribe();

    this.pararColaboradores.emit();
    this.modalRef.close();
  }

  cancelar() {
    this.usuariosDisponibles = [];
    this.colaboradores = [];
    this.modalRef.close();
    this.pararColaboradores.emit();
  }

}
