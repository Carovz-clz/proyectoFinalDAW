package com.carol.checkproject.repositorios;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.carol.checkproject.dto.ProyectoGetDTO;
import com.carol.checkproject.entities.ProyectoEntity;

public interface ProyectoRepository extends CrudRepository<ProyectoEntity, Integer>{
	
	@Query(value = "select new com.carol.checkproject.dto.ProyectoGetDTO (p.idproyecto, p.nombre, p.descripcion, up.usuario, up.tipoUsuario, p.fecha) "
	 		+ "FROM com.carol.checkproject.entities.ProyectoEntity p "
	 		+ "JOIN com.carol.checkproject.entities.UsuarioProyectoEntity up ON p.idproyecto = up.idproyecto "
	 		+ "WHERE up.usuario LIKE :usuario ")
		List<ProyectoGetDTO> obtenerProyectosPorIdUsuario(@Param("usuario") String usuario);
	
	@Query(value = "select new com.carol.checkproject.dto.ProyectoGetDTO (p.idproyecto, p.nombre, p.descripcion, up.usuario, up.tipoUsuario, p.fecha) "
	 		+ "FROM com.carol.checkproject.entities.ProyectoEntity p "
	 		+ "JOIN com.carol.checkproject.entities.UsuarioProyectoEntity up ON p.idproyecto = up.idproyecto "
	 		+ "WHERE up.usuario LIKE :usuario "
	 		+ "AND up.tipoUsuario = 1")
		List<ProyectoGetDTO> obtenerProyectosPropietarioPorIdUsuario(@Param("usuario") String usuario);
	
}
