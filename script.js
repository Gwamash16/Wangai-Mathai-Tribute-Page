// script.js
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');

    // Function to display only the selected section
    function displaySection(sectionId) {
        sections.forEach(section => {
            section.style.display = 'none';
        });
        document.getElementById(sectionId).style.display = 'block';
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('data-section');
            displaySection(sectionId);
        });
    });

    // Initially display all sections
    sections.forEach(section => {
        section.style.display = 'block';
    });

    // Interactive feature to reveal a hidden fact
    const revealFactButton = document.getElementById('reveal-fact');
    const hiddenFact = document.getElementById('hidden-fact');

    revealFactButton.addEventListener('click', () => {
        hiddenFact.style.display = 'block';
        revealFactButton.style.display = 'none';
    });

    // Open social media links in a new tab
    const socialMediaLinks = document.querySelectorAll('.social-media a');

    socialMediaLinks.forEach(link => {
        link.setAttribute('target', '_blank');
    });
});

