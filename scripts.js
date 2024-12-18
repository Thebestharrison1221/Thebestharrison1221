// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Open Modals
const project1Btn = document.getElementById('project-1');
const modal1 = document.getElementById('modal-1');
const close1 = document.getElementById('close-1');

project1Btn.addEventListener('click', () => {
    modal1.style.display = 'block';
});

close1.addEventListener('click', () => {
    modal1.style.display = 'none';
});

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target === modal1) {
        modal1.style.display = "none";
    }
};
