package com.carol.checkproject.dto;

import java.util.List;

import com.carol.checkproject.entities.TareaEntity;

public class ProyectoPostDTO {
	private String nombreProyecto;
	private String descripcion;
	private String[] tareas;
	private String usuario;
	
	public ProyectoPostDTO() {
		super();
	}

	

	public ProyectoPostDTO(String nombreProyecto, String descripcion, String[] tareas, String usuario) {
		super();
		this.nombreProyecto = nombreProyecto;
		this.descripcion = descripcion;
		this.tareas = tareas;
		this.usuario = usuario;
	}


	public String getNombreProyecto() {
		return nombreProyecto;
	}

	public void setNombreProyecto(String nombreProyecto) {
		this.nombreProyecto = nombreProyecto;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	
	public String getUsuario() {
		return usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}



	public String[] getTareas() {
		return tareas;
	}


	public void setTareas(String[] tareas) {
		this.tareas = tareas;
	}



	
}
