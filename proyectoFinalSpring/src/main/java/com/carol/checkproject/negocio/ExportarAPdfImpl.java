package com.carol.checkproject.negocio;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;

import javax.servlet.http.HttpServletResponse;
import javax.swing.JOptionPane;

import org.springframework.stereotype.Service;

import com.itextpdf.text.BaseColor;
import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Element;
import com.itextpdf.text.Font;
import com.itextpdf.text.Font.FontFamily;
import com.itextpdf.text.FontFactory;
import com.itextpdf.text.PageSize;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;

@Service
public class ExportarAPdfImpl implements IExportarAPdf {

	@Override
	public ByteArrayInputStream  exportar(Integer idproyecto) throws DocumentException, IOException {

		Document documento = new Document();
		ByteArrayOutputStream out = new ByteArrayOutputStream();

//		PdfWriter.getInstance(documento, new FileOutputStream("mipdf.pdf"));
		PdfWriter.getInstance(documento, out);

		documento.open();

		Paragraph parametro = new Paragraph("Esto es una prueba buey",
				FontFactory.getFont(FontFactory.TIMES_ROMAN, 12, Font.BOLD, BaseColor.RED));

		// Escribimos sobre el
		documento.add(parametro);

		// Cerrar documento
		documento.close();

		// Mensaje de Exito
		System.out.println("Lo he creado =======================================================================");
		
		return new ByteArrayInputStream(out.toByteArray());

	}

}
