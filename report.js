const button = document.getElementById('report');

function generatePDF() {
    // Choose the element that your content will be rendered to.
    const element = document.getElementById('invoice');
    // Choose the element and save the PDF for your user.
    html2pdf().from(element).save();
}

button.addEventListener('click', generatePDF);