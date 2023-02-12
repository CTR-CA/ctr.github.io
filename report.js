const button = document.getElementById('report');
button.addEventListener('click', () => {
    afterPrintReport()
    generatePDF()
});

function afterPrintReport() {

    const afterprint1 = document.getElementById('onOff-costumerInformation')

    if (afterprint1.style.display === "none") {
        afterprint1.style.display = "block"

    } else {
        afterprint1.style.display = "block"
    }

    const afterprint2 = document.getElementById('onOff-pdiSector')

    if (afterprint2.style.display == "none") {
        afterprint2.style.display = "block"

    } else {
        afterprint2.style.display = "block"
    }

    const afterprint3 = document.getElementById('onOff-settingsSector')

    if (afterprint3.style.display == "none") {
        afterprint3.style.display = "block"

    } else {
        afterprint3.style.display = "block"
    }


}

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
console.log('test')
