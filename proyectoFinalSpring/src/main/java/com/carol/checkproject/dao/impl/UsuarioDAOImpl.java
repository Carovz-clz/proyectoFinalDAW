package com.carol.checkproject.dao.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.carol.checkproject.dao.UsuarioDAO;
import com.carol.checkproject.dto.UsuarioDTO;
import com.carol.checkproject.entities.UsuarioEntity;
import com.carol.checkproject.repositorios.UsuarioRepository;

@Service
public class UsuarioDAOImpl implements UsuarioDAO{
	@Autowired
	private UsuarioRepository usuarioRepo;


	@Override
	public Boolean insertarUsuario(UsuarioEntity usuario) {
		
		//Si al buscar el nombre de usuario devuelve un objeto distinto de null significa que ya existe en la bbdd
		if(usuarioRepo.buscaUsuarioPorNombreUsuario(usuario.getUsername())!=null) {
			return false;
		}else {
			usuarioRepo.save(usuario);
			return true;
		}
	}


	@Override
	public Boolean comprobarUsuarioYPassword(String usuario, String pass) {
		
		//Si al buscar usuario y contraseña devuelve un objeto distinto de null es que las credenciales son correctas
		if(usuarioRepo.comprobarUsuarioYPassword(usuario, pass) != null) {
			return true;
		}else {
			return false;
		}
	}
	
	
}
