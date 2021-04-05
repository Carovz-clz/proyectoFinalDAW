package com.carol.checkproject.repositorios;

import org.springframework.data.repository.CrudRepository;
import com.carol.checkproject.entities.ProyectoEntity;

public interface ProyectoRepository extends CrudRepository<ProyectoEntity, Integer>{
	
}
