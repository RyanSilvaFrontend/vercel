
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensagem enviada com sucesso!');
    // Aqui você pode adicionar lógica para enviar o formulário via AJAX, por exemplo.
});

// Scroll suave para links de navegação
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animações ao rolar a página
window.addEventListener('scroll', function() {
    document.querySelectorAll('section').forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            section.style.animation = 'fadeIn 2s';
        }
    });
});
