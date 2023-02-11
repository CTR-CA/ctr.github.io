const button = document.getElementById('report');
button.addEventListener('click', () => {

    generatePDF()
});

function generatePDF() {
    window.jsPDF = window.jspdf.jsPDF;
    let doc = new jsPDF();



    const userDataReport = document.getElementById("userName").value.toUpperCase()
    const dateTime = new Date();
    const element = document.getElementById('contentToPrint');

    doc.html(element, {
        callback: function (doc) {
            doc.save(`${userDataReport}_${dateTime}_PDI.pdf`);
        },
        margin: [10, 5, 5, 10],
        autoParging: 'text',
        x: 0,
        y: 0,
        width: 190,
        windowWidth: 675
    })
}
