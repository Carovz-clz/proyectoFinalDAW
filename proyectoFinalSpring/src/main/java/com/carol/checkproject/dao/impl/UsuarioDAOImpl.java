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
		if(usuarioRepo.buscaUsuarioPorNombreUsuario(usuario.getUsername())!=null) {
			return false;
		}else {
			usuarioRepo.save(usuario);
			return true;
		}
	}
	
	
}
