// Subtle background gradient movement based on mouse position
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    document.body.style.background = `linear-gradient(${120 + x * 60}deg, #e0e7ff ${Math.floor(
        y * 40
    )}%,rgb(73, 115, 157) 100%)`;
});

// Animate the container on hover
const container = document.querySelector('.container');
if (container) {
    container.addEventListener('mouseenter', () => {
        container.style.boxShadow = '0 12px 40px rgba(99,102,241,0.18)';
        container.style.transform = 'scale(1.025)';
        container.style.transition = 'box-shadow 0.3s, transform 0.3s';
    });
    container.addEventListener('mouseleave', () => {
        container.style.boxShadow = '0 8px 32px rgba(60,72,100,0.15)';
        container.style.transform = 'scale(1)';
    });
}

// Button ripple effect
const uploadBtn = document.querySelector('button[type="submit"]');
if (uploadBtn) {
    uploadBtn.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.left = `${e.offsetX}px`;
        ripple.style.top = `${e.offsetY}px`;
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
}

// Add ripple effect styles dynamically
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
button[type="submit"] {
    position: relative;
    overflow: hidden;
}
.ripple {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 0.6s linear;
    background: rgba(255,255,255,0.5);
    pointer-events: none;
    width: 100px;
    height: 100px;
    left: 0;
    top: 0;
    z-index: 2;
}
@keyframes ripple {
    to {
        transform: scale(2.5);
        opacity: 0;
    }
}
`;
document.head.appendChild(rippleStyle);