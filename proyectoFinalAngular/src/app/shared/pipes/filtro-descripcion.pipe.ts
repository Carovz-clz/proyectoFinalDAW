import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroDescripcion'
})
export class FiltroDescripcionPipe implements PipeTransform {

  transform(proyectos: any[], arg: any): any {
    const resultProyectos = [];
    if(arg == ''){
      return proyectos;
    }else{
      for(const proyecto of proyectos){
        if(proyecto.descripcion.indexOf(arg) > -1){
          resultProyectos.push(proyecto);
        }
      }
      return resultProyectos;
    }    
  }

}
