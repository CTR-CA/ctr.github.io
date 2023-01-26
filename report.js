
window.jsPDF = window.jspdf.jsPDF;

// Generate 2 pages PDF document
function generatePDF() {
    let doc = new jsPDF();

    doc.text(20, 20, 'Hello world!');
    doc.text(20, 30, 'This is client-side Javascript to generate a PDF.');

    // Add new page
    doc.addPage();
    doc.text(20, 20, 'Visit CodexWorld.com');

    // Save the PDF
    doc.save('document.pdf');
}

// Generate PDF document with landscape orientation
function generatePDF_2() {

    let doc = new jsPDF({
        orientation: 'landscape'
    });

    doc.text(20, 20, 'Hello world!');
    doc.text(20, 30, 'This is client-side Javascript to generate a PDF.');

    // Add new page
    doc.addPage();
    doc.text(20, 20, 'Visit CodexWorld.com');

    // Save the PDF
    doc.save('document.pdf');
}

// Generate PDF document with different fonts
function generatePDF_3() {
    let doc = new jsPDF();

    doc.text(20, 20, 'This is the default font.');

    doc.setFont("courier", "normal");
    doc.text("This is courier normal.", 20, 30);

    doc.setFont("times", "italic");
    doc.text("This is times italic.", 20, 40);

    doc.setFont("helvetica", "bold");
    doc.text("This is helvetica bold.", 20, 50);

    doc.setFont("courier", "bolditalic");
    doc.text("This is courier bolditalic.", 20, 60);

    doc.setFont("times", "normal");
    doc.text("This is centred text.", 105, 80, null, null, "center");
    doc.text("And a little bit more underneath it.", 105, 90, null, null, "center");
    doc.text("This is right aligned text", 200, 100, null, null, "right");
    doc.text("And some more", 200, 110, null, null, "right");
    doc.text("Back to left", 20, 120);

    doc.text("10 degrees rotated", 20, 140, null, 10);
    doc.text("-10 degrees rotated", 20, 160, null, -10);

    // Save the PDF
    doc.save('document.pdf');
}

// Generate PDF document with different font size
function generatePDF_4() {
    let doc = new jsPDF();

    doc.setFontSize(24);
    doc.text("This is a title", 20, 20);

    doc.setFontSize(16);
    doc.text("This is some normal sized text underneath.", 20, 30);

    // Save the PDF
    doc.save('document.pdf');
}

// Generate PDF document with different font color
function generatePDF_5() {
    let doc = new jsPDF();

    doc.setTextColor(100);
    doc.text("This is gray.", 20, 20);

    doc.setTextColor(150);
    doc.text("This is light gray.", 20, 30);

    doc.setTextColor(255, 0, 0);
    doc.text("This is red.", 20, 40);

    doc.setTextColor(0, 255, 0);
    doc.text("This is green.", 20, 50);

    doc.setTextColor(0, 0, 255);
    doc.text("This is blue.", 20, 60);

    doc.setTextColor("red");
    doc.text("This is red.", 60, 40);

    doc.setTextColor("green");
    doc.text("This is green.", 60, 50);

    doc.setTextColor("blue");
    doc.text("This is blue.", 60, 60);

    // Save the PDF
    doc.save('document.pdf');
}

// Generate PDF document with image
function generatePDF_6() {
    let doc = new jsPDF();

    doc.setFontSize(24);
    doc.text("This is a title", 20, 20);

    doc.setFontSize(16);
    doc.text("This is some normal sized text underneath.", 20, 30);

    // Add image
    doc.addImage("images/flowers.jpg", "JPEG", 15, 40, 180, 180);

    // Save the PDF
    doc.save('document.pdf');
}

/*
 * Convert HTML content to PDF
 */
function Convert_HTML_To_PDF() {
    let doc = new jsPDF();

    // Source HTMLElement or a string containing HTML.
    let elementHTML = document.querySelector("#contentToPrint");

    doc.html(elementHTML, {
        callback: function (doc) {
            // Save the PDF
            doc.save('document-html.pdf');
        },
        margin: [10, 10, 10, 10],
        autoPaging: 'text',
        x: 0,
        y: 0,
        width: 190, // Target width in the PDF document
        windowWidth: 675 // Window width in CSS pixels
    });
}
