// Rolagem suave no menu
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const destino = document.querySelector(this.getAttribute('href'));
        if (destino) {
            destino.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Funcionalidade do formulário
const formulario = document.querySelector('.form-contato');
if (formulario) {
    formulario.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('✅ Mensagem enviada! Obrigada pelo contato!');
        formulario.reset();
    });
}

// Efeitos de animação ao rolar
const observador = new IntersectionObserver((itens) => {
    itens.forEach(item => {
        if (item.isIntersecting) {
            item.target.style.opacity = '1';
            item.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.secao').forEach(secao => {
    secao.style.opacity = '0';
    secao.style.transform = 'translateY(20px)';
    secao.style.transition = 'all 0.6s ease-out';
    observador.observe(secao);
});

