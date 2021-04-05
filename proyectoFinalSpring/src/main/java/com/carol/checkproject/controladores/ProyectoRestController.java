package com.carol.checkproject.controladores;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.carol.checkproject.dao.ProyectoDAO;
import com.carol.checkproject.dto.ProyectoDTO;
import com.carol.checkproject.entities.ProyectoEntity;
import com.carol.checkproject.repositorios.ProyectoRepository;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
@RequestMapping("/v1")
public class ProyectoRestController {
	
	@Autowired
	private ProyectoRepository proyectoRepo;
	
	@Autowired
	private ProyectoDAO proyectoDao;
	
	@GetMapping(value= "/proyectos")
	public Iterable<ProyectoEntity> listarTodosLosProyectos(){
		return proyectoRepo.findAll();
	}
	
	@PostMapping(value = "/proyectos")
	public ResponseEntity<?> insertarProyecto(@RequestBody ProyectoDTO proyecto){
		
		if(proyectoDao.insertarProyecto(proyecto)) {
			return new ResponseEntity<>(proyecto, HttpStatus.OK);
		}else {
			return null;
		}
	}

}
