const button = document.getElementById('report');
button.addEventListener('click', generatePDF);
function generatePDF() {
    // Choose the element that your content will be rendered to.
    const element = document.getElementById('invoice');
    html2pdf().from(element).save();
}
