package com.carol.checkproject.negocio;


import java.io.ByteArrayInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;

public interface IExportarAPdf {
	public ByteArrayInputStream exportar(Integer idproyecto) throws DocumentException, FileNotFoundException, IOException;
}
