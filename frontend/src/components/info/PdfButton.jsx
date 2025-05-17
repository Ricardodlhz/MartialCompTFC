import React from 'react';
import { jsPDF } from 'jspdf';

// Puedes importar tu imagen como base64 o usar una URL
import logo from './../../assets/logotipo.png';

const PdfButton = ({ nombreEvento, fecha, localizacion }) => {

  const generarPDF = () => {
    const doc = new jsPDF();

    // Agregar imagen (x, y, ancho, alto)
    doc.addImage(logo, 'PNG', 10, 10, 50, 20);

    // Nombre de la empresa
    doc.setFontSize(16);
    doc.text('Mi Empresa S.A.', 70, 20);

    // Datos del evento
    doc.setFontSize(12);
    doc.text(`Evento: ${nombreEvento}`, 20, 50);
    doc.text(`Fecha: ${fecha}`, 20, 60);
    doc.text(`Localización: ${localizacion}`, 20, 70);

    // Guardar el PDF
    doc.save(`entrada_${nombreEvento}.pdf`);
  };

  return (
    <button 
      onClick={generarPDF}
      className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      Descargar PDF
    </button>
  );
};

export default PdfButton;
