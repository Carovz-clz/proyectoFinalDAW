package com.carol.checkproject.negocio;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.carol.checkproject.entities.ProyectoEntity;
import com.carol.checkproject.entities.TareaEntity;
import com.carol.checkproject.repositorios.ProyectoRepository;
import com.carol.checkproject.repositorios.TareaRepository;
import com.itextpdf.text.Chunk;
import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Font;
import com.itextpdf.text.FontFactory;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.pdf.PdfWriter;
import com.itextpdf.text.ListItem;

@Service
public class ExportarAPdfImpl implements IExportarAPdf {
	@Autowired
	ProyectoRepository proyectoRepo;
	
	@Autowired
	TareaRepository tareaRepo;

	@Override
	public ByteArrayInputStream  exportar(Integer idproyecto) throws DocumentException, IOException {
			
		ProyectoEntity proyecto = proyectoRepo.findById(idproyecto).get();		
		List<TareaEntity> tareas = tareaRepo.buscarTareas(idproyecto);
		
		Font fuenteTitulo = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 20, Font.BOLD);
		Font fuenteTitulo2 = FontFactory.getFont(FontFactory.HELVETICA, 16, Font.BOLD);
		Font fuenteFecha = FontFactory.getFont(FontFactory.HELVETICA, 10, Font.NORMAL);
		Font fuenteTextoDescripcion = FontFactory.getFont(FontFactory.HELVETICA, 12, Font.ITALIC);
		Font fuenteTexto = FontFactory.getFont(FontFactory.HELVETICA, 12, Font.NORMAL);
		Font fuenteTextoTachado = FontFactory.getFont(FontFactory.HELVETICA, 12, Font.STRIKETHRU);

		Document documento = new Document();
		ByteArrayOutputStream out = new ByteArrayOutputStream();

		
		PdfWriter.getInstance(documento, out);

		documento.open();
		
		Paragraph titulo = new Paragraph(proyecto.getNombre(),fuenteTitulo);
		titulo.add(crearFechaChunk("  "+proyecto.getFecha(), fuenteFecha));
		Paragraph descripcion = new Paragraph(proyecto.getDescripcion(), fuenteTextoDescripcion);
		Paragraph tituloProgreso = new Paragraph("Progreso", fuenteTitulo2);		
		Paragraph progreso = new Paragraph(String.format("%.2f", calcularProgresoProyecto(tareas)) +"%", fuenteTexto);
		Paragraph tituloTareas = new Paragraph("Tareas", fuenteTitulo2);	
		com.itextpdf.text.List lista = new com.itextpdf.text.List(12);
        lista.setListSymbol("\u2022");
		
		for (TareaEntity tarea : tareas) {
			if(tarea.getRealizada() == 1) {
				lista.add(new ListItem(tarea.getDescripcion(), fuenteTextoTachado));
			}else {
				lista.add(new ListItem(tarea.getDescripcion(), fuenteTexto));
			}			
		}		

		// Escribimos sobre el
		documento.add(titulo);
		documento.add(descripcion);
		documento.add(tituloProgreso);
		documento.add(progreso);
		documento.add(tituloTareas);
		documento.add(lista);

		// Cerrar documento
		documento.close();
		
		return new ByteArrayInputStream(out.toByteArray());

	}
	
	static private Chunk crearFechaChunk(String s, Font font) {     
		Chunk chunk = new Chunk(s, font);      
		return chunk; }
	
	static private double calcularProgresoProyecto(List<TareaEntity> tareas) {
		int tareasCompletadas = 0;
		for (TareaEntity tarea : tareas) {
			if(tarea.getRealizada() == 1) {
				tareasCompletadas++;
			}
		}
		
		return ( (double)tareasCompletadas / tareas.size() ) * 100;
	}

}
