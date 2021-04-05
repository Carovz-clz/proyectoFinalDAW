package com.carol.checkproject.dto;

public class ProyectoDTO {
	private String nombreProyecto;
	private String descripcion;
	private String[] tareas;
	private String usuario;
	
	public ProyectoDTO() {
		super();
	}


	public ProyectoDTO(String nombreProyecto, String descripcion, String[] tareas, String usuario) {
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

	public String[] getTareas() {
		return tareas;
	}

	public void setTareas(String[] tareas) {
		this.tareas = tareas;
	}
	
	public String getUsuario() {
		return usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}
	
}
