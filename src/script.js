document.addEventListener("DOMContentLoaded", function() {
    const title = document.querySelector('.about-title');
    const underline = document.querySelector('.underline-about');
    underline.style.width = `${title.offsetWidth}px`;
});
document.addEventListener("DOMContentLoaded", function() {
    const title = document.querySelector('.donate-title');
    const underline = document.querySelector('.underline-donate');
    underline.style.width = `${title.offsetWidth}px`;
});
document.addEventListener("DOMContentLoaded", function() {
    const title = document.querySelector('.contact-title');
    const underline = document.querySelector('.underline-contact');
    const contacttext = document.querySelector('.contact-subtext');
    underline.style.width = `${title.offsetWidth}px`;
    contacttext.style.width = `${title.offsetWidth}px`;
});