package com.carol.checkproject.controladores;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.carol.checkproject.dao.UsuarioDAO;
import com.carol.checkproject.dto.ProyectoGetDTO;
import com.carol.checkproject.dto.UsuarioDTO;
import com.carol.checkproject.entities.UsuarioEntity;
import com.carol.checkproject.repositorios.UsuarioRepository;

@RestController
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE })
@RequestMapping("/v1")
public class UsuarioRestController {

	@Autowired
	private UsuarioRepository usuarioRepo;

	@Autowired
	private UsuarioDAO usuarioDAO;

	@GetMapping(value = "/usuarios")
	public Iterable<UsuarioEntity> listarTodosLosUsuarios() {
		return usuarioRepo.findAll();
	}

	@GetMapping(value = "/usuarios/{usuario}")
	public Optional<UsuarioEntity> listarUsuarioPorId(@PathVariable("usuario") String usuario) {
		return usuarioRepo.findById(usuario);
	}
	
	@GetMapping(value = "/usuarios/{usuario}/{pass}")
	public ResponseEntity<?> ComprobarLoginUsuario(@PathVariable("usuario") String usuario, @PathVariable("pass") String pass) {
		if (usuarioDAO.comprobarUsuarioYPassword(usuario, pass)) {
			return new ResponseEntity<>(HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		}
	}
	
	
	@PostMapping(value = "/usuarios")
	public ResponseEntity<?> insertarUsuario(@RequestBody UsuarioEntity usuario) {

		if (usuarioDAO.insertarUsuario(usuario)) {
			return new ResponseEntity<>(HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		}
	}

	@PutMapping(value = "/usuarios")
	public ResponseEntity<?> actualizarUsuario(@RequestBody UsuarioEntity usuario) {
		
		usuarioRepo.save(usuario);
		return new ResponseEntity<>(usuario, HttpStatus.OK);

	}
	
	@DeleteMapping(value = "/usuarios/{username}")
	public ResponseEntity<?> EliminarUsuarioPorNombreUsuario(@PathVariable("username") String username){
		
		usuarioRepo.deleteById(username);
		return new ResponseEntity<String>(HttpStatus.OK);
	}

}
