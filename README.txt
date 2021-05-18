================================== DESPLIEGUE ==================================

=> DOCKER:
	> docker network create miRed
	> docker run -d --network miRed --name mi_mysql -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=proyectofinal -e MYSQL_PASSWORD=root -p 3307:3306 carovz/img_bbdd
	> docker run --network miRed --name mi_back -p 8080:8080 carovz/img_back
	> docker run -d --name mi_front -p 7200:80 carovz/img_front


=> LOCAL:

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
	 	> npm install moment --save 
	 	> ng serve //Para compilar y ejecutar el código	 	 
	-Abrir un navegador e introducir la dirección http://localhost:4200/


