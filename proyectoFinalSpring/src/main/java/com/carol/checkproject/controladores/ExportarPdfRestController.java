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

	@PostMapping(value ="/exportarpdf", produces = MediaType.APPLICATION_PDF_VALUE)
	public ResponseEntity<InputStreamResource> exportarAPdf(@RequestBody Integer proyecto) throws DocumentException, IOException {
		ByteArrayInputStream bis = exportar.exportar(1);
		
		HttpHeaders headers = new HttpHeaders();

		headers.add("Content-Disposition", "attachment;filename=employees.pdf");

		return ResponseEntity.ok().headers(headers).contentType(MediaType.APPLICATION_PDF)
				.body(new InputStreamResource(bis));
		
		
//		byte[] contents = Files.readAllBytes(Paths.get("mipdf.pdf"));
//		
//		HttpHeaders headers = new HttpHeaders();
//	    headers.setContentType(MediaType.APPLICATION_PDF);
//	    // Here you have to set the actual filename of your pdf
//	    String filename = "proyecto.pdf";
//	    headers.setContentDispositionFormData(filename, filename);
//	    headers.setCacheControl("must-revalidate, post-check=0, pre-check=0");
//	    ResponseEntity<byte[]> response = new ResponseEntity<>(contents, headers, HttpStatus.OK);
//	    return response;
	}
}
