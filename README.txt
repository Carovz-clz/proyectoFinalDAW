Consideraciones previas:
	- El inicio de sesión es simulado, no existe una sesión como tal ni tampoco comprobación de si el usuario existe en la base de datos.
	  Está hecho de esta forma de manera provisional.

	- Para ver el funcionamiento de las partes desarrolladas, hay que registrar un nuevo usuario antes de "iniciar sesión".

	- Partes que se han desarrollado: alta de usuario (con comprobaciones), vista previa de los proyectos existentes y creación de proyectos.

Requisitos: 
	- Tener instalado mysql workbench.
	- Spring tool suite para el proyecto spring.
	- Ide para la parte front, por ejemplo, Visual Studio Code.

Pasos: 
	- Ejecutar el script sql para crear la base de datos.
	- Abrir el proyecto spring con Spring Tool Suite y ejecutarlo como aplicación spring.
	- Abrir el proyecto Angular en el ide seleccionado, abrir una terminal (no necesariamente la que proporciona el ide) en dicho proyecto y ejecutar los siguientes comandos:
		> npm install -g @angular/cli  //Para instalar angular cli
		> npm install  o npm install npm -g  //Para instalar nodemodules o actualizar en caso de que ya esté instalado
		> npm install --save bootstrap@4 //Para añadir los paquetes de bootstrap
		> ng add @ng-bootstrap/ng-bootstrap //Para añadir los paquetes necesarios para los modales
		> ng add @fortawesome/angular-fontawesome //elegir la primera opción para los iconos
	 	> ng serve //Para compilar y ejecutar el código
	-Abrir un navegador e introducir la dirección http://localhost:4200/


