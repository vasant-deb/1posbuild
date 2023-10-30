import win32print
import win32ui
import os
from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS from flask_cors
import pdfkit
import tempfile

import subprocess

app = Flask(__name__)
CORS(app)  # Enable CORS for your Flask app
config = pdfkit.configuration(wkhtmltopdf='C:/Program Files/wkhtmltopdf/bin/wkhtmltopdf.exe')


@app.route('/')
def print_text_file():
    try:
        # Get the file path and printer name from the request
        text_file_path = 'C:/Users/vsnts/Desktop/r.txt'
        printer_name = 'Microsoft XPS Document Writer'

        # Check if the path and printer name are provided
        if not text_file_path or not printer_name:
            return jsonify({'error': True, 'message': 'File path and printer name are required'})

        # Open the text file
        hprinter = win32print.OpenPrinter(printer_name)
        printer_info = win32print.GetPrinter(hprinter, 2)
        pdc = win32ui.CreateDC()
        pdc.CreatePrinterDC(printer_name)
        pdc.StartDoc('Print Text File')
        pdc.StartPage()
        
        with open(text_file_path, 'r') as text_file:
            for line in text_file:
                pdc.TextOut(100, 100, line)
        
        pdc.EndPage()
        pdc.EndDoc()
        pdc.DeleteDC()
        win32print.ClosePrinter(hprinter)

        return jsonify({'error': False, 'message': 'Printing successful'})
    except Exception as e:
        return jsonify({'error': True, 'message': str(e)})
        
@app.route('/print_html', methods=['POST'])
def print_html():
    try:
        data = request.get_json()
        html_content = data.get('htmlContent')
        printer_name = data.get('printername')

        if not html_content:
            return jsonify({'error': True, 'message': 'HTML content is required'})

        if not printer_name:
            return jsonify({'error': True, 'message': 'Printer name is required'})

        # Create a temporary HTML file to store the HTML content
        text_file_path = tempfile.NamedTemporaryFile(delete=False, suffix=".html").name

        with open(text_file_path, 'w', encoding='utf-8') as file:
            file.write(html_content)

        # Create a temporary PDF file
        pdf_file_path = tempfile.NamedTemporaryFile(delete=False, suffix=".pdf").name

        # Convert HTML to PDF using PDFKit
        pdfkit.from_file(text_file_path, pdf_file_path, configuration=config)

        # For testing purposes, save the PDF to a file
        with open('test.pdf', 'wb') as pdf_file:
            pdf_file.write(pdfkit.from_file(text_file_path, False, configuration=config))

        # Print the PDF using the specified printer
                # Open the text file
        hprinter = win32print.OpenPrinter(printer_name)
        printer_info = win32print.GetPrinter(hprinter, 2)
        pdc = win32ui.CreateDC()
        pdc.CreatePrinterDC(printer_name)
        pdc.StartDoc('Print Text File')
        pdc.StartPage()
        
        with open('test.pdf', 'rb') as pdf_file:
            pdf_data = pdf_file.read()
            
        hprinter = win32print.OpenPrinter(printer_name)
        printer_info = win32print.GetPrinter(hprinter, 2)
        pdc = win32ui.CreateDC()
        pdc.CreatePrinterDC(printer_name)
        pdc.StartDoc('Print PDF File')
        pdc.StartPage()
        pdc.StartDoc('Print PDF')
        pdc.StartPage()
        pdc.BitBlt((0, 0), (1000, 1000), pdf_data, win32con.SRCCOPY)
        pdc.EndPage()
        pdc.EndDoc()
        pdc.DeleteDC()
        win32print.ClosePrinter(hprinter)

        # Clean up: Remove the temporary files
        #os.remove(text_file_path)
        #os.remove(pdf_file_path)

        return jsonify({'error': False, 'message': 'Printing successful'})

    except Exception as e:
        return jsonify({'error': True, 'message': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
