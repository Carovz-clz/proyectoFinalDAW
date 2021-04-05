package com.carol.checkproject.dto;


public class UsuarioDTO {
	
	private String username;
	private String pass;
	private String nombre;
	private String apellidos;
	private String email;
	private Integer visible;
	private Integer enabled;
	
	public UsuarioDTO() {
		super();
	}

	public UsuarioDTO(String username, String pass, String nombre, String apellidos, String email, Integer visible,
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
