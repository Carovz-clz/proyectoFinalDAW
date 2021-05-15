package com.carol.checkproject.dao;

import com.carol.checkproject.dto.UsuarioDTO;
import com.carol.checkproject.entities.UsuarioEntity;

public interface UsuarioDAO {
	Boolean insertarUsuario(UsuarioEntity usuario);
	Boolean comprobarUsuarioYPassword(String usuario, String pass);
}
