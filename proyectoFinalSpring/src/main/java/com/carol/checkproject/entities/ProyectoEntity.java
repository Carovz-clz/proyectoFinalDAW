package com.carol.checkproject.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@Table(name = "proyecto")
public class ProyectoEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idproyecto")
	private Integer idproyecto;
	
	@Column(name = "nombre")
	private String nombre;
	
	@Column(name = "fecha")
	private String fecha;
	
	@Column(name = "descripcion")
	private String descripcion;
	
	/*@OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.PERSIST, mappedBy = "proyecto")
	private List<TareaEntity> tareas;*/

	public ProyectoEntity() {
		super();
	}

//	public ProyectoEntity(Integer idproyecto, String nombre, String fecha, String descripcion,
//			List<TareaEntity> tareas) {
//		super();
//		this.idproyecto = idproyecto;
//		this.nombre = nombre;
//		this.fecha = fecha;
//		this.descripcion = descripcion;
//		//this.tareas = tareas;
//	}
	
	public ProyectoEntity(String nombre, String fecha, String descripcion) {
		super();
		this.nombre = nombre;
		this.fecha = fecha;
		this.descripcion = descripcion;
	}
	

	public ProyectoEntity(String nombre, String fecha, String descripcion, List<TareaEntity> tareas) {
		super();
		this.nombre = nombre;
		this.fecha = fecha;
		this.descripcion = descripcion;
		//this.tareas = tareas;
	}

	public Integer getIdproyecto() {
		return idproyecto;
	}

	public void setIdproyecto(Integer idproyecto) {
		this.idproyecto = idproyecto;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getFecha() {
		return fecha;
	}

	public void setFecha(String fecha) {
		this.fecha = fecha;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

//	public List<TareaEntity> getTareas() {
//		return tareas;
//	}
//
//	public void setTareas(List<TareaEntity> tareas) {
//		this.tareas = tareas;
//	}
	
	

}
