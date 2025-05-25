import React from 'react';
import { jsPDF } from 'jspdf';

// Puedes importar tu imagen como base64 o usar una URL
import logo from './../../assets/logotipo.png';

const PdfButton = ({ nombreEvento, fecha, localizacion, nombreUser, apellidos }) => {

  const generarPDF = () => {
    const doc = new jsPDF();

    // Agregar imagen (x, y, ancho, alto)
    doc.addImage(logo, 'PNG', 10, 10, 20, 20);

    // Nombre de la empresa
    doc.setFontSize(16);
    doc.text('MartialComp S.A.', 70, 20);

    // Datos del evento
    doc.setFontSize(14);
    doc.text("Detalles del Evento", 20, 40);

    doc.setFontSize(12);
    let startY = 50;
    let lineSpacing = 10;

    doc.text(`Evento: ${nombreEvento}`, 20, startY);
    doc.text(`Fecha: ${fecha}`, 20, startY + lineSpacing);
    doc.text(`Localización: ${localizacion}`, 20, startY + lineSpacing * 2);

    // Espacio extra antes de los datos del usuario
    startY += lineSpacing * 4;

    doc.text("Datos del Asistente", 20, startY);
    doc.text(`Nombre: ${nombreUser}`, 20, startY + lineSpacing);
    doc.text(`Apellidos: ${apellidos}`, 20, startY + lineSpacing * 2);
    // Guardar el PDF
    doc.save(`acreditación_${nombreEvento}.pdf`);
  };

  return (
    <button
      onClick={generarPDF}
      className="p-2 bg-gray-600 text-white py-2 rounded-md hover:bg-gray-700 hover:cursor-pointer transition-colors"
    >
      Descargar PDF
    </button>
  );
};

export default PdfButton;
