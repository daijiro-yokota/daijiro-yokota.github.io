// File: js/dynamic-footer.js

document.addEventListener('DOMContentLoaded', function () {
    const footerContent = `
        <footer>
          <div class="footer col-lg-12">
            <div class="copyright text-center">
              <p class="margin-top">&copy;2025 Marketing x Data</p>
            </div>
          </div>
        </footer>
    `;

    const footer = document.querySelector('footer');
    if (footer) {
        footer.innerHTML = footerContent;
    } else {
        console.error('Footer element not found');
    }
});
