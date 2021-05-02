package com.carol.checkproject.controladores;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.carol.checkproject.entities.TareaEntity;
import com.carol.checkproject.repositorios.TareaRepository;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT})
@RequestMapping("/v1")
public class TareaRestController {
	
	@Autowired
	TareaRepository tareaRepo;
	
	@GetMapping(value= "/tareas/{id}")
	public Iterable<TareaEntity> buscarTareaPorId(@PathVariable("id") Integer id){
		return tareaRepo.buscarTareas(id);
	}
	
	@PutMapping(value = "/tareas")
	public ResponseEntity<?> actualizarTarea(@RequestBody TareaEntity tarea) {
		
		tareaRepo.save(tarea);
		return new ResponseEntity<>(tarea, HttpStatus.OK);

	}
}
