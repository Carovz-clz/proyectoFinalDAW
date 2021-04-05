package com.carol.checkproject.dao.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.carol.checkproject.dao.UsuarioDAO;
import com.carol.checkproject.entities.UsuarioEntity;
import com.carol.checkproject.repositorios.UsuarioRepository;

@Service
public class UsuarioDAOImpl implements UsuarioDAO{
	@Autowired
	private UsuarioRepository usuarioRepo;


	@Override
	public Boolean insertarUsuario(UsuarioEntity usuario) {
		if(existeUsuario(usuario.getUsername())) {
			return false;
		}else {
			usuarioRepo.save(usuario);
			return true;
		}
	}
	
	private Boolean existeUsuario(String nombreUsuario) {
		if(usuarioRepo.buscaUsuarioPorNombreUsuario(nombreUsuario)!=null) {
			return true;
		}else {
			return false;
		}
	}
	
	
}
