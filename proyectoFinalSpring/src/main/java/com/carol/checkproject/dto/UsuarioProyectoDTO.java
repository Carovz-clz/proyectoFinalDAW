package com.carol.checkproject.dto;

public class UsuarioProyectoDTO {
	private String username;
	private Integer idProyecto;
	
	public UsuarioProyectoDTO() {
		super();
	}

	public UsuarioProyectoDTO(String username, Integer idProyecto) {
		super();
		this.username = username;
		this.idProyecto = idProyecto;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public Integer getIdProyecto() {
		return idProyecto;
	}

	public void setIdProyecto(Integer idProyecto) {
		this.idProyecto = idProyecto;
	}
	
	
}
