package com.carol.checkproject.controladores;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.carol.checkproject.negocio.IExportarAPdf;
import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;

@RestController
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE,
		RequestMethod.PUT })
@RequestMapping("/v1")
public class ExportarPdfRestController {

	@Autowired
	IExportarAPdf exportar;

	@GetMapping(value ="/exportarpdf/{id}")
	public ResponseEntity<?> exportarAPdf(@PathVariable("id") Integer id) throws DocumentException, IOException {
		ByteArrayInputStream bis = exportar.exportar(id);
		
		HttpHeaders headers = new HttpHeaders();

		headers.add("Content-Disposition", "attachment;filename=proyecto.pdf");

		return ResponseEntity.ok().headers(headers).contentType(MediaType.APPLICATION_PDF)
				.body(new InputStreamResource(bis));
		

	}
}
