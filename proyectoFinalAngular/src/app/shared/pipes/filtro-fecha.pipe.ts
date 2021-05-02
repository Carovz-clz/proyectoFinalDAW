import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroFecha'
})
export class FiltroFechaPipe implements PipeTransform {

  transform(proyectos: any[], arg: any): any {
    const resultProyectos = [];
    if(arg == ''){
      return proyectos;
    }else{
      for(const proyecto of proyectos){
        if(proyecto.fecha.indexOf(arg) > -1){
          resultProyectos.push(proyecto);
        }
      }
      return resultProyectos;
    }    
  }

}
