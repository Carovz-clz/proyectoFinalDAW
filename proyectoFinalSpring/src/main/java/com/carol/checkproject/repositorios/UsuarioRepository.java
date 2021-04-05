package com.carol.checkproject.repositorios;


import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.carol.checkproject.dto.UsuarioDTO;
import com.carol.checkproject.entities.UsuarioEntity;

@Repository
public interface UsuarioRepository extends CrudRepository<UsuarioEntity, String>{
	
	@Query(value = "select new com.carol.checkproject.dto.UsuarioDTO (usuario.username, usuario.pass, usuario.nombre, usuario.apellidos, usuario.email, usuario.visible, usuario.enabled) "
			+ "FROM com.carol.checkproject.entities.UsuarioEntity usuario "
			+ "WHERE  usuario.username LIKE :username ")
			  UsuarioDTO buscaUsuarioPorNombreUsuario(@Param("username") String username);
}
