// Funcionalidades básicas do site

// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Analytics básico (opcional - remova se não quiser)
console.log('Forca Brasil - Site carregado com sucesso');

// Função para rastrear cliques em botões de download
document.addEventListener('DOMContentLoaded', function() {
    const downloadButtons = document.querySelectorAll('a[href*="play.google.com"]');
    downloadButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('Usuário clicou em download');
        });
    });
});
