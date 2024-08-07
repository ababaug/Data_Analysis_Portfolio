document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('open');
        nav.classList.toggle('open');
    });

    // Update script to match class names
    const hireMeButton = document.querySelector('.hire-me-button'); // Updated class name
    const profileImg = document.querySelector('.profile img');
    
    hireMeButton.addEventListener('click', () => {
        // Show thank you message
        const thankYouMessage = document.createElement('div');
        thankYouMessage.className = 'thank-you-message';
        thankYouMessage.innerText = 'Thank you!';
        document.querySelector('#about').appendChild(thankYouMessage);
        
        // Add dancing class to the photo
        profileImg.classList.add('photo-dance');

        // Remove the dancing class after animation ends
        setTimeout(() => {
            profileImg.classList.remove('photo-dance');
            // Redirect to email
            window.location.href = 'mailto:augustine.abah362@gmail.com';
        }, 2000); // Match this duration with the dance animation duration
    });
});
