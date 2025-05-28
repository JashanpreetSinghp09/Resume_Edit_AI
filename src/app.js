// Function to check if uploaded file is .docx
// src/app.js


document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('resume-file');
    if (fileInput) {
        fileInput.addEventListener('change', function () {
            const file = this.files[0];
            if (file && !file.name.toLowerCase().endsWith('.docx')) {
                alert('Please upload a .docx file only.');
                this.value = '';        // Clear the input
            }
        });
    }
});