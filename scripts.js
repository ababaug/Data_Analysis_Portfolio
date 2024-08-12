document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const readMoreBtn = document.getElementById('read-more-btn');
    const hiddenProjects = document.querySelectorAll('.project.hidden');

    menuToggle.addEventListener('click', function() {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });


    let isExpanded = false;

    readMoreBtn.addEventListener('click', function() {
        hiddenProjects.forEach(project => {
            project.style.display = isExpanded ? 'none' : 'block';
        });

        readMoreBtn.textContent = isExpanded ? 'Read More' : 'Read Less';
        isExpanded = !isExpanded;
    });
});
