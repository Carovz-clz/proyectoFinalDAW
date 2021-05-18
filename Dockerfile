#Dockerfile para crear una imagen basada en mysql
FROM mysql

#Se copian los scripts desde la carpeta en la que estén al directorio dentro del contenedor
COPY ./scriptSql/ /docker-entrypoint-initdb.d/
