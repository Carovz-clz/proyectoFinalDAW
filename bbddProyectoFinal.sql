drop database if exists proyectoFinal;
create database proyectoFinal;
use proyectoFinal;

CREATE TABLE `proyectofinal`.`users` (
  `username` VARCHAR(50) NOT NULL,
  `password` VARCHAR(50) NOT NULL,
  `nombre` VARCHAR(45) NULL,
  `apellidos` VARCHAR(45) NULL,
  `correo_electronico` VARCHAR(45) NULL,
  `visible` TINYINT(1) NOT NULL DEFAULT 1,
  `enabled` TINYINT(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`username`))
COMMENT = 'Tabla usuarios';


CREATE TABLE `proyectofinal`.`tipo-usuario` (
  `id` INT NOT NULL,
  `tipo` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
COMMENT = 'Tipos de usuarios';

CREATE TABLE `proyectofinal`.`authorities` (
  `idauthorities` INT NOT NULL,
  `authority` VARCHAR(30) NOT NULL,
  `username` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`idauthorities`),
  INDEX `username_idx` (`username` ASC) VISIBLE,
  CONSTRAINT `username`
    FOREIGN KEY (`username`)
    REFERENCES `proyectofinal`.`users` (`username`)
    ON DELETE CASCADE
  ON UPDATE CASCADE);
  
  ALTER TABLE `proyectofinal`.`authorities` 
CHANGE COLUMN `idauthorities` `idauthorities` INT(11) NOT NULL AUTO_INCREMENT ;

    
CREATE TABLE `proyectofinal`.`proyecto` (
  `idproyecto` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `fecha` DATE NOT NULL,
  `descripcion` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idproyecto`))
COMMENT = 'Tabla de proyectos';

CREATE TABLE `proyectofinal`.`usuario-proyecto` (
  `idusuario_proyecto` INT NOT NULL AUTO_INCREMENT,
  `id_proyecto` INT NOT NULL,
  `usuario` VARCHAR(50) NOT NULL,
  `tipo_usuario` INT NOT NULL,
  PRIMARY KEY (`idusuario_proyecto`),
  INDEX `id_proyecto_idx` (`id_proyecto` ASC) VISIBLE,
  INDEX `usuario_idx` (`usuario` ASC) VISIBLE,
  INDEX `tipo_usuario_idx` (`tipo_usuario` ASC) VISIBLE,
  CONSTRAINT `id_proyecto`
    FOREIGN KEY (`id_proyecto`)
    REFERENCES `proyectofinal`.`proyecto` (`idproyecto`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `usuario`
    FOREIGN KEY (`usuario`)
    REFERENCES `proyectofinal`.`users` (`username`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `tipo_usuario`
    FOREIGN KEY (`tipo_usuario`)
    REFERENCES `proyectofinal`.`tipo-usuario` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
COMMENT = 'Tabla que recoge el tipo de usuario de cada proyecto';

CREATE TABLE `proyectofinal`.`tarea` (
  `idtarea` INT NOT NULL,
  `creador` VARCHAR(50) NOT NULL,
  `descripcion` VARCHAR(100) NOT NULL,
  `realizada` TINYINT(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`idtarea`),
  INDEX `creador_idx` (`creador` ASC) VISIBLE,
  CONSTRAINT `creador`
    FOREIGN KEY (`creador`)
    REFERENCES `proyectofinal`.`users` (`username`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
    
CREATE TABLE `proyectofinal`.`proyecto-tarea` (
  `idproyecto_tarea` INT NOT NULL,
  `id_tarea` INT NOT NULL,
  `id_proyecto` INT NOT NULL,
  PRIMARY KEY (`idproyecto_tarea`),
  INDEX `id_tarea_idx` (`id_tarea` ASC) VISIBLE,
  INDEX `id_proyecto_idx` (`id_proyecto` ASC) VISIBLE,
  CONSTRAINT `tarea`
    FOREIGN KEY (`id_tarea`)
    REFERENCES `proyectofinal`.`tarea` (`idtarea`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `proyecto`
    FOREIGN KEY (`id_proyecto`)
    REFERENCES `proyectofinal`.`proyecto` (`idproyecto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
COMMENT = 'Tabla que recoge las tareas que pertenecen a cada proyecto';






