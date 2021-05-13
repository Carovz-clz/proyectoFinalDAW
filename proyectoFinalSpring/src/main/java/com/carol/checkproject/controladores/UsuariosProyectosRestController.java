package com.carol.checkproject.controladores;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.carol.checkproject.dto.UsuarioDTO;
import com.carol.checkproject.dto.UsuarioProyectoDTO;
import com.carol.checkproject.entities.UsuarioEntity;
import com.carol.checkproject.entities.UsuarioProyectoEntity;
import com.carol.checkproject.repositorios.UsuarioProyectoRepository;
import com.carol.checkproject.repositorios.UsuarioRepository;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT})
@RequestMapping("/v1")
public class UsuariosProyectosRestController {
	@Autowired
	UsuarioRepository usuarioRepo;
	
	@Autowired
	UsuarioProyectoRepository usuarioProyectoRepo;
	
	@GetMapping(value = "/usuarios/proyectos/{proyecto}")
	public Iterable<UsuarioDTO> listarUsuariosColaboradoresDeProyecto(@PathVariable("proyecto") Integer proyecto) {
		return usuarioRepo.buscaUsuariosColaboradoresDeProyecto(proyecto);
	}
	
	@PostMapping(value = "/usuarios/proyectos")
	public ResponseEntity<?> insertarColaboradorEnProyecto(@RequestBody UsuarioProyectoDTO usuarioProyecto) {
		usuarioProyectoRepo.save(new UsuarioProyectoEntity(usuarioProyecto.getIdProyecto(), usuarioProyecto.getUsername(), 2));
		return new ResponseEntity<>(usuarioProyecto, HttpStatus.OK);
	}
}
