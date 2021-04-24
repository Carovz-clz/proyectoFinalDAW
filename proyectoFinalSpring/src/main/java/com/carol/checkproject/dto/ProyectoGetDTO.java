package com.carol.checkproject.dto;

import java.util.List;

import com.carol.checkproject.entities.TareaEntity;

public class ProyectoGetDTO {
	private Integer idProyecto;
	private String nombreProyecto;
	private String descripcion;
	private List<TareaEntity> tareas;
	private String usuario;
	private Integer tipoUsuario;
	private String fecha;
	
	public ProyectoGetDTO() {
		super();
	}

	public ProyectoGetDTO(Integer idProyecto, String nombreProyecto, String descripcion, List<TareaEntity> tareas,
			String usuario, Integer tipoUsuario, String fecha) {
		super();
		this.idProyecto = idProyecto;
		this.nombreProyecto = nombreProyecto;
		this.descripcion = descripcion;
		this.tareas = tareas;
		this.usuario = usuario;
		this.tipoUsuario = tipoUsuario;
		this.fecha = fecha;
	}

	public ProyectoGetDTO(String nombreProyecto, String descripcion, List<TareaEntity> tareas, String usuario,
			Integer tipoUsuario, String fecha) {
		super();
		this.nombreProyecto = nombreProyecto;
		this.descripcion = descripcion;
		this.tareas = tareas;
		this.usuario = usuario;
		this.tipoUsuario = tipoUsuario;
		this.fecha = fecha;
	}

	public ProyectoGetDTO(Integer idProyecto, String nombreProyecto, String descripcion, String usuario,
			Integer tipoUsuario, String fecha) {
		super();
		this.idProyecto = idProyecto;
		this.nombreProyecto = nombreProyecto;
		this.descripcion = descripcion;
		this.usuario = usuario;
		this.tipoUsuario = tipoUsuario;
		this.fecha = fecha;
	}

	public Integer getIdProyecto() {
		return idProyecto;
	}

	public void setIdProyecto(Integer idProyecto) {
		this.idProyecto = idProyecto;
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

	public List<TareaEntity> getTareas() {
		return tareas;
	}

	public void setTareas(List<TareaEntity> tareas) {
		this.tareas = tareas;
	}

	public String getUsuario() {
		return usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}

	public Integer getTipoUsuario() {
		return tipoUsuario;
	}

	public void setTipoUsuario(Integer tipoUsuario) {
		this.tipoUsuario = tipoUsuario;
	}

	public String getFecha() {
		return fecha;
	}

	public void setFecha(String fecha) {
		this.fecha = fecha;
	}
	
	
	
	
}
