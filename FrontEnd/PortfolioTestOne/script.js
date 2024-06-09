function toggleMenu(){
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}


document.querySelectorAll('.interactive-element').forEach(item => {
    item.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        const rotateX = (y - 0.5) * 30; // Adjust tilt intensity
        const rotateY = (x - 0.5) * -30; // Adjust tilt intensity
        item.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'rotateX(0) rotateY(0)';
    });
});
