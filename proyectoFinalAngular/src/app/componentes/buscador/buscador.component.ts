import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  filtroNombre = '';
  filtroDescripcion = '';
  filtroFecha = '';

  constructor() { }

  ngOnInit(): void {

  }

  inicializarFormulario(){

  }

}
