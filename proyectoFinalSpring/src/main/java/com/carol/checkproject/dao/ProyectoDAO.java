package com.carol.checkproject.dao;

import java.util.List;

import com.carol.checkproject.dto.ProyectoGetDTO;
import com.carol.checkproject.dto.ProyectoPostDTO;

public interface ProyectoDAO {
	Boolean insertarProyecto(ProyectoPostDTO proyecto);
	Boolean editarDatosProyecto(ProyectoPostDTO proyecto);
	List<ProyectoGetDTO> obtenerProyectoPorIdUsuario(String idUsuario);
}
