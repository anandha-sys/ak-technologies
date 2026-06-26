document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.tilt-element');
    const container = document.body;

    // Listen for mouse movement across the whole screen
    container.addEventListener('mousemove', (e) => {
        // Get mouse position relative to the center of the screen
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;

        // Apply 3D rotation to the card
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    // Reset rotation when mouse leaves the screen
    container.addEventListener('mouseleave', () => {
        card.style.transition = 'transform 0.5s ease';
        card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    });

    // Remove transition when hovering so it tracks the mouse smoothly
    container.addEventListener('mouseenter', () => {
        card.style.transition = 'none';
    });
});
