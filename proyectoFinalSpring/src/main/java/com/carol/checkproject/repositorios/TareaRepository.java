package com.carol.checkproject.repositorios;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.carol.checkproject.entities.TareaEntity;

public interface TareaRepository extends CrudRepository<TareaEntity, Integer>{
	@Query(value = "select new com.carol.checkproject.entities.TareaEntity (tarea.idtarea, tarea.idproyecto, tarea.descripcion, tarea.realizada) "
			+ "FROM com.carol.checkproject.entities.TareaEntity tarea "
			+ "WHERE  tarea.idproyecto = :id ")
			  List<TareaEntity> buscarTareas(@Param("id") Integer id);
}
