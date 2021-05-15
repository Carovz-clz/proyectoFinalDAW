import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-confirmacion',
  templateUrl: './modal-confirmacion.component.html',
  styleUrls: ['./modal-confirmacion.component.css']
})
export class ModalConfirmacionComponent implements OnInit {
  @ViewChild('contenido', {static: false}) contenidoModal: NgbModalRef;
  @Output() confirmar = new EventEmitter<boolean>();
  modalRefConfirmacion: NgbModalRef;
  @Input() texto = '';

  constructor(private modalConfirmacion: NgbModal) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.abrirModal();
  }

  abrirModal(){
    this.modalRefConfirmacion = this.modalConfirmacion.open(this.contenidoModal, { size: 'md', centered: true });
  }

  aceptar(){
    this.confirmar.emit(true);
    this.modalRefConfirmacion.close();
  }

  cancelar(){    
    this.confirmar.emit(false);
    this.modalRefConfirmacion.close();
  }

}
