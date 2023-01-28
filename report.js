

const button = document.getElementById('report');
button.addEventListener('click', generatePDF);
function generatePDF() {
    const element = document.getElementById('invoice');
    html2pdf().from(element).save();

}
