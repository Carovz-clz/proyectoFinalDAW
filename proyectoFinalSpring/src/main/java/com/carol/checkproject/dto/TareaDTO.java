package com.carol.checkproject.dto;

public class TareaDTO {
	private Integer idtarea;
	private String descripcion;
	private Integer realizada;
	
	public TareaDTO() {
		super();
	}


	public TareaDTO(String descripcion, Integer realizada) {
		super();
		this.descripcion = descripcion;
		this.realizada = realizada;
	}


	public TareaDTO(Integer idtarea, String descripcion, Integer realizada) {
		super();
		this.idtarea = idtarea;
		this.descripcion = descripcion;
		this.realizada = realizada;
	}


	public Integer getIdtarea() {
		return idtarea;
	}

	public void setIdtarea(Integer idtarea) {
		this.idtarea = idtarea;
	}

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
