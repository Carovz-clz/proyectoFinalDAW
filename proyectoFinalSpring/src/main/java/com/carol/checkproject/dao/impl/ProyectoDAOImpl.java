package com.carol.checkproject.dao.impl;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.carol.checkproject.dao.ProyectoDAO;
import com.carol.checkproject.dto.ProyectoDTO;
import com.carol.checkproject.entities.ProyectoEntity;
import com.carol.checkproject.entities.TareaEntity;
import com.carol.checkproject.entities.UsuarioProyectoEntity;
import com.carol.checkproject.repositorios.ProyectoRepository;
import com.carol.checkproject.repositorios.TareaRepository;
import com.carol.checkproject.repositorios.UsuarioProyectoRepository;

@Service
public class ProyectoDAOImpl implements ProyectoDAO {
	
	@Autowired
	private ProyectoRepository proyectoRepo;
	
	@Autowired
	private TareaRepository tareaRepo;
	
	@Autowired
	private UsuarioProyectoRepository usProyRepo;
	

	@Override
	public Boolean insertarProyecto(ProyectoDTO proyecto) {
		Date cDate = new Date();
	    String fecha = new SimpleDateFormat("yyyy-MM-dd").format(cDate);
	    
//	    List<TareaEntity> listaTareas = new ArrayList<>();
//	    
//	    for (String tarea : proyecto.getTareas()) {
//			listaTareas.add(new TareaEntity(tarea, 0));
//		}
//		
//		ProyectoEntity proyectoNuevo = new ProyectoEntity(proyecto.getNombreProyecto(), fecha, proyecto.getDescripcion(), listaTareas);
	    
	    ProyectoEntity proyectoNuevo = new ProyectoEntity(proyecto.getNombreProyecto(), fecha, proyecto.getDescripcion());
	    proyectoNuevo = proyectoRepo.save(proyectoNuevo);
	    
	    for (String tarea : proyecto.getTareas()) {
			tareaRepo.save(new TareaEntity(proyectoNuevo.getIdproyecto(), tarea, 0));
		}
	    
	    usProyRepo.save(new UsuarioProyectoEntity(proyectoNuevo.getIdproyecto(), proyecto.getUsuario(), 1));
	    
		
		return true;
	}

}
