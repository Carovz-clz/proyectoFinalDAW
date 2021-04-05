package com.carol.checkproject.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "usuarioproyecto")
public class UsuarioProyectoEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idusuario_proyecto")
	private Integer id;
	
	@Column(name = "id_proyecto")
	private Integer idproyecto;
	
	@Column(name = "usuario")
	private String usuario;
	
	@Column(name = "tipo_usuario")
	private Integer tipoUsuario;

	public UsuarioProyectoEntity() {
		super();
	}

	public UsuarioProyectoEntity(Integer idproyecto, String usuario, Integer tipoUsuario) {
		super();
		this.idproyecto = idproyecto;
		this.usuario = usuario;
		this.tipoUsuario = tipoUsuario;
	}

	public UsuarioProyectoEntity(Integer id, Integer idproyecto, String usuario, Integer tipoUsuario) {
		super();
		this.id = id;
		this.idproyecto = idproyecto;
		this.usuario = usuario;
		this.tipoUsuario = tipoUsuario;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getIdproyecto() {
		return idproyecto;
	}

	public void setIdproyecto(Integer idproyecto) {
		this.idproyecto = idproyecto;
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
	
	
}
