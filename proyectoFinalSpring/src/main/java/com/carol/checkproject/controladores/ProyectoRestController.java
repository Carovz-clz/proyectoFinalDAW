package com.carol.checkproject.controladores;

import java.util.Optional;

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

import com.carol.checkproject.dao.ProyectoDAO;
import com.carol.checkproject.dto.ProyectoDTO;
import com.carol.checkproject.entities.ProyectoEntity;
import com.carol.checkproject.entities.TareaEntity;
import com.carol.checkproject.repositorios.ProyectoRepository;
import com.carol.checkproject.repositorios.TareaRepository;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
@RequestMapping("/v1")
public class ProyectoRestController {
	
	@Autowired
	private ProyectoRepository proyectoRepo;
	
	@Autowired
	private TareaRepository tareaRepo;
	
	@Autowired
	private ProyectoDAO proyectoDao;
	
	@GetMapping(value= "/proyectos")
	public Iterable<ProyectoEntity> listarTodosLosProyectos(){
		return proyectoRepo.findAll();
	}
	
	@GetMapping(value= "/proyectos/{id}")
	public Iterable<TareaEntity> buscarTareaPorId(@PathVariable("id") Integer id){
		return tareaRepo.buscarTareas(id);
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
