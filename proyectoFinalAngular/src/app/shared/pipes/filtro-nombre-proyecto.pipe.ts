import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroNombreProyecto'
})
export class FiltroNombreProyectoPipe implements PipeTransform {

  transform(proyectos: any[], arg: any): any {
    const resultProyectos = [];
    if(arg == ''){
      return proyectos;
    }else{
      for(const proyecto of proyectos){
        if(proyecto.nombreProyecto.indexOf(arg) > -1){
          resultProyectos.push(proyecto);
        }
      }
      return resultProyectos;
    }    
  }

}
