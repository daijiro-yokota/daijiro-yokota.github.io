document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.innerHTML = '<p>Sidebar content loaded!</p>';
    } else {
        console.error('Sidebar element not found');
    }
});