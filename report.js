

const button = document.getElementById('report');
button.addEventListener('click', generatePDF);

function generatePDF() {
    window.jsPDF = window.jspdf.jsPDF;
    let doc = new jsPDF();

    const element = document.getElementById('contentToPrint');

    doc.html(element, {
        callback: function (doc) {
            doc.save('document-html.pdf');
        },
        margin: [10, 10, 10, 10],
        autoParging: 'text',
        x: 0,
        y: 0,
        width: 190,
        windowWidth: 675
    })


}
//html2pdf().from(element).save();