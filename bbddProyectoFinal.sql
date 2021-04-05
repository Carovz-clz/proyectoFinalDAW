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


CREATE TABLE `proyectofinal`.`tipoUsuario` (
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

CREATE TABLE `proyectofinal`.`usuarioProyecto` (
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
    REFERENCES `proyectofinal`.`tipoUsuario` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
COMMENT = 'Tabla que recoge el tipo de usuario de cada proyecto';

CREATE TABLE `proyectofinal`.`tarea` (
  `idtarea` INT NOT NULL AUTO_INCREMENT,
  `idproyecto` INT NOT NULL,
  `descripcion` VARCHAR(100) NOT NULL,
  `realizada` TINYINT(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`idtarea`),
  INDEX `idproyecto_idx` (`idproyecto` ASC) VISIBLE,
  CONSTRAINT `idproyecto`
    FOREIGN KEY (`idproyecto`)
    REFERENCES `proyectofinal`.`proyecto` (`idproyecto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
    
    ALTER TABLE `proyectofinal`.`tarea` 
DROP FOREIGN KEY `idproyecto`;
ALTER TABLE `proyectofinal`.`tarea` 
ADD CONSTRAINT `idproyecto`
  FOREIGN KEY (`idproyecto`)
  REFERENCES `proyectofinal`.`proyecto` (`idproyecto`)
  ON DELETE CASCADE
  ON UPDATE CASCADE;
  
SET GLOBAL time_zone = '+1:00';

insert into tipoUsuario values (1, 'creador');
insert into tipoUsuario values (2, 'colaborador');
    





