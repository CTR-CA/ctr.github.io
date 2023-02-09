const button = document.getElementById('report');
button.addEventListener('click', () => {
    const dateTimeEnd = new Date();
    document.getElementById("dateTimeEnd").innerHTML = dateTimeEnd;
    generatePDF()
});

function generatePDF() {
    window.jsPDF = window.jspdf.jsPDF;
    let doc = new jsPDF();
    const element = document.getElementById('contentToPrint');

    doc.html(element, {
        callback: function (doc) {
            doc.save(`Pre-Delivery Inspection.pdf`);
        },
        margin: [10, 5, 5, 10],
        autoParging: 'text',
        x: 0,
        y: 0,
        width: 190,
        windowWidth: 675
    })
}
