package com.carol.checkproject.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "tarea")
public class TareaEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idtarea")
	private Integer idtarea;
	
	@Column(name = "idproyecto")
	private Integer idproyecto;
	
	@Column(name = "descripcion")
	private String descripcion;
	
	@Column(name = "realizada")
	private Integer realizada;

	public TareaEntity() {
		super();
	}
	
	

	public TareaEntity(Integer idtarea, Integer idproyecto, String descripcion, Integer realizada) {
		super();
		this.idtarea = idtarea;
		this.idproyecto = idproyecto;
		this.descripcion = descripcion;
		this.realizada = realizada;
	}



	public TareaEntity(Integer idtarea, ProyectoEntity proyecto, String descripcion, Integer realizada) {
		super();
		this.idtarea = idtarea;
//		this.proyecto = proyecto;
		this.descripcion = descripcion;
		this.realizada = realizada;
	}
	
	
	

	public TareaEntity(Integer idproyecto, String descripcion, Integer realizada) {
		super();
		this.idproyecto = idproyecto;
		this.descripcion = descripcion;
		this.realizada = realizada;
	}

	public TareaEntity(String descripcion, Integer realizada) {
		super();
		this.descripcion = descripcion;
		this.realizada = realizada;
	}

	public TareaEntity(ProyectoEntity proyecto, String descripcion, Integer realizada) {
		super();
//		this.proyecto = proyecto;
		this.descripcion = descripcion;
		this.realizada = realizada;
	}

	public Integer getIdtarea() {
		return idtarea;
	}

	public void setIdtarea(Integer idtarea) {
		this.idtarea = idtarea;
	}

//	public ProyectoEntity getProyecto() {
//		return proyecto;
//	}
//
//	public void setProyecto(ProyectoEntity proyecto) {
//		this.proyecto = proyecto;
//	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public Integer getRealizada() {
		return realizada;
	}

	public void setRealizada(Integer realizada) {
		this.realizada = realizada;
	}
	
	
}
