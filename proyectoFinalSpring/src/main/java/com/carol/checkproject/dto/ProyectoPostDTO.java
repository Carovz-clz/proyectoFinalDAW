package com.carol.checkproject.dto;

import java.util.List;

import com.carol.checkproject.entities.TareaEntity;

public class ProyectoPostDTO {
	private Integer idproyecto;
	private String nombreProyecto;
	private String descripcion;
	private String[] tareas;
	private TareaDTO[] tareasconid; 
	private String usuario;
	private String fecha;
	
	public ProyectoPostDTO() {
		super();
	}

	

	public ProyectoPostDTO(Integer idproyecto, String nombreProyecto, String descripcion, String[] tareas,
			String usuario, String fecha) {
		super();
		this.idproyecto = idproyecto;
		this.nombreProyecto = nombreProyecto;
		this.descripcion = descripcion;
		this.tareas = tareas;
		this.usuario = usuario;
		this.fecha = fecha;
	}



	public ProyectoPostDTO(String nombreProyecto, String descripcion, String[] tareas, String usuario) {
		super();
		this.nombreProyecto = nombreProyecto;
		this.descripcion = descripcion;
		this.tareas = tareas;
		this.usuario = usuario;
	}
	

	public ProyectoPostDTO(String nombreProyecto, String descripcion, String[] tareas, String usuario, String fecha) {
		super();
		this.nombreProyecto = nombreProyecto;
		this.descripcion = descripcion;
		this.tareas = tareas;
		this.usuario = usuario;
		this.fecha = fecha;
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



	public String getFecha() {
		return fecha;
	}



	public void setFecha(String fecha) {
		this.fecha = fecha;
	}



	public Integer getIdproyecto() {
		return idproyecto;
	}



	public void setIdproyecto(Integer idproyecto) {
		this.idproyecto = idproyecto;
	}



	public TareaDTO[] getTareasconid() {
		return tareasconid;
	}



	public void setTareasconid(TareaDTO[] tareasconid) {
		this.tareasconid = tareasconid;
	}

	

	
}
