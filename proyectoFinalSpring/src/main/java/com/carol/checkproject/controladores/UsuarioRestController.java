package com.carol.checkproject.controladores;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.carol.checkproject.dao.UsuarioDAO;
import com.carol.checkproject.entities.UsuarioEntity;
import com.carol.checkproject.repositorios.UsuarioRepository;

@RestController
@RequestMapping("/v1")
public class UsuarioRestController {
	
	@Autowired
	private UsuarioRepository usuarioRepo;
	
	@Autowired
	private UsuarioDAO usuarioDAO;
	
	
	@GetMapping(value= "/usuarios")
	public Iterable<UsuarioEntity> listarTodosLosUsuarios(){
		return usuarioRepo.findAll();
	}
	
	@PostMapping(value = "/usuarios")
	public ResponseEntity<?> insertarUsuario(@RequestBody UsuarioEntity usuario){
		
		if(usuarioDAO.insertarUsuario(usuario)) {
			return new ResponseEntity<>(usuario, HttpStatus.OK);
		}else {
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		}
	}
	
}
