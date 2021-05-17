FROM tomcat:9.0.24

EXPOSE 8080

RUN rm -rf /usr/local/tomcat/webapps/

#incluimos el war generado en la carpeta correspondiente del servidor tomcat
ADD ./checkproject.war /usr/local/tomcat/webapps/

CMD ["/usr/local/tomcat/bin/catalina.sh", "run"]

#Un ejemplo para la sentencia de arranque:
#docker run --network colegio --name colegio_back -p 8080:8080 soniagg/tomcat_colegio