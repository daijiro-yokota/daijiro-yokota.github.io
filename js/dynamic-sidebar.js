// File: js/dynamic-sidebar.js

document.addEventListener('DOMContentLoaded', function() {
    const sidebarContent = `
        <div class="sidebar-content">
            <h1 class="sidebar-heading"> <a href="index.html">Marketing x Data</a></h1>
            <p class="sidebar-p"></p>
            <ul class="sidebar-menu">
                <li class="sidebar-item"><a href="index.html" class="sidebar-link">Home</a></li>
                <li class="sidebar-item"><a href="about.html" class="sidebar-link">About</a></li>
                <li class="sidebar-item"><a href="blog.html" class="sidebar-link">Blog</a></li>
                <li class="sidebar-item"><a href="resource.html" class="sidebar-link">Resource</a></li>
                <li class="sidebar-item"><a href="contact.html" class="sidebar-link">Contact</a></li>
            </ul>
            <p class="social">
                <a href="https://www.linkedin.com/in/daijiro-yokota" data-animate-hover="pulse" class="external linkedin"><i class="fa fa-linkedin"></i></a>
                <a href="https://github.com/daijiro-yokota" data-animate-hover="pulse" class="external github"><i class="fa fa-github"></i></a>
                <a href="mailto:daijiroyokota81@gmail.com" data-animate-hover="pulse" class="email"><i class="fa fa-envelope"></i></a>
            </p>
        </div>
    `;

    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.innerHTML = sidebarContent;

        // Highlight the current page in the sidebar
        const currentPage = window.location.pathname.split("/").pop() || 'index.html';
        const currentLink = sidebar.querySelector(`a[href="${currentPage}"]`);
        if (currentLink) {
            currentLink.classList.add('active');
        }
    } else {
        console.error('Sidebar element not found');
    }
});