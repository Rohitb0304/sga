// Function to load the header dynamically
function loadHeader() {
    fetch('header.html')  // Fetch the header file
        .then(response => response.text())  // Get the content of the header
        .then(data => {
            // Inject the header content into the div with id 'header-container'
            document.getElementById('header-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));  // Error handling
}

// Function to load the footer dynamically
function loadFooter() {
    fetch('footer.html')  // Fetch the footer file
        .then(response => response.text())  // Get the content of the footer
        .then(data => {
            // Inject the footer content into the div with id 'footer-container'
            document.getElementById('footer-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));  // Error handling
}

// Ensure the DOM is fully loaded before running the functions
document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadFooter();
});
