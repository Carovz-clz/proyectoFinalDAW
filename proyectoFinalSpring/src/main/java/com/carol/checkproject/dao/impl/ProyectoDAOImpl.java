package com.carol.checkproject.dao.impl;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.carol.checkproject.dao.ProyectoDAO;
import com.carol.checkproject.dto.ProyectoGetDTO;
import com.carol.checkproject.dto.ProyectoPostDTO;
import com.carol.checkproject.dto.TareaDTO;
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
	public Boolean insertarProyecto(ProyectoPostDTO proyecto) {
		Date cDate = new Date();
		String fecha = new SimpleDateFormat("yyyy-MM-dd").format(cDate);

		ProyectoEntity proyectoNuevo = new ProyectoEntity(proyecto.getNombreProyecto(), fecha,
				proyecto.getDescripcion());
		proyectoNuevo = proyectoRepo.save(proyectoNuevo);

		for (String tarea : proyecto.getTareas()) {
			tareaRepo.save(new TareaEntity(proyectoNuevo.getIdproyecto(), tarea, 0));
		}

		usProyRepo.save(new UsuarioProyectoEntity(proyectoNuevo.getIdproyecto(), proyecto.getUsuario(), 1));

		return true;
	}

	@Override
	public Boolean editarDatosProyecto(ProyectoPostDTO proyecto) {
		Date cDate = new Date();
		String fecha = new SimpleDateFormat("yyyy-MM-dd").format(cDate);

		ProyectoEntity proyectoNuevo = new ProyectoEntity(proyecto.getIdproyecto(), proyecto.getNombreProyecto(),
				proyecto.getFecha(), proyecto.getDescripcion());
		proyectoNuevo = proyectoRepo.save(proyectoNuevo);

		for (TareaDTO tarea : proyecto.getTareasconid()) {
			if (tarea.getIdtarea() > 0) {
				tareaRepo.save(new TareaEntity(tarea.getIdtarea(), proyectoNuevo.getIdproyecto(),
						tarea.getDescripcion(), tarea.getRealizada()));
			} else {
				tareaRepo.save(
						new TareaEntity(proyectoNuevo.getIdproyecto(), tarea.getDescripcion(), tarea.getRealizada()));
			}

		}

		return true;
	}

	@Override
	public List<ProyectoGetDTO> obtenerProyectoPorIdUsuario(String idUsuario) {

		List<ProyectoGetDTO> proyectos = proyectoRepo.obtenerProyectosPorIdUsuario(idUsuario);

		for (ProyectoGetDTO p : proyectos) {
			p.setTareas(tareaRepo.buscarTareas(p.getIdProyecto()));
		}

		return proyectos;
	}

	@Override
	public List<ProyectoGetDTO> obtenerProyectosPropietarioPorIdUsuario(String idUsuario) {
		List<ProyectoGetDTO> proyectos = proyectoRepo.obtenerProyectosPropietarioPorIdUsuario(idUsuario);

		for (ProyectoGetDTO p : proyectos) {
			p.setTareas(tareaRepo.buscarTareas(p.getIdProyecto()));
		}

		return proyectos;
	}

}
