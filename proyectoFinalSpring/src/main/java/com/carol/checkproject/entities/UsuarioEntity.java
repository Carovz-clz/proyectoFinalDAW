package com.carol.checkproject.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "users")
public class UsuarioEntity {
	@Id
	@Column(name = "username")
	private String username;
	
	@Column(name = "password")
	private String pass;
	
	@Column(name = "nombre")
	private String nombre;
	
	@Column(name = "apellidos")
	private String apellidos;
	
	@Column(name = "correo_electronico")
	private String email;
	
	@Column(name = "visible")
	private Integer visible;
	
	@Column(name = "enabled")
	private Integer enabled;

	public UsuarioEntity() {
		super();
	}

	public UsuarioEntity(String username, String pass, String nombre, String apellidos, String email, Integer visible,
			Integer enabled) {
		super();
		this.username = username;
		this.pass = pass;
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.email = email;
		this.visible = visible;
		this.enabled = enabled;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPass() {
		return pass;
	}

	public void setPass(String pass) {
		this.pass = pass;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellidos() {
		return apellidos;
	}

	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Integer getVisible() {
		return visible;
	}

	public void setVisible(Integer visible) {
		this.visible = visible;
	}

	public Integer getEnabled() {
		return enabled;
	}

	public void setEnabled(Integer enabled) {
		this.enabled = enabled;
	}
	
	
	
	
	

}
