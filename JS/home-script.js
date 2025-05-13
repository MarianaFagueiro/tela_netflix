document.addEventListener('DOMContentLoaded', function() {
    // Efeito de scroll na navbar
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Hover nos itens
    const items = document.querySelectorAll('.item');
    
    items.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.zIndex = '10';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.zIndex = '1';
        });
    });

    // Simulação de clique nos botões
    const playBtn = document.querySelector('.play-btn');
    const infoBtn = document.querySelector('.info-btn');
    
    playBtn.addEventListener('click', function() {
        alert('Reproduzindo conteúdo...');
    });
    
    infoBtn.addEventListener('click', function() {
        alert('Abrindo informações do conteúdo...');
    });

    // Pesquisa
    const searchInput = document.querySelector('.user-menu input');
    
    searchInput.addEventListener('focus', function() {
        this.style.width = '200px';
        this.style.background = 'rgba(0,0,0,0.8)';
    });
    
    searchInput.addEventListener('blur', function() {
        this.style.width = '120px';
        this.style.background = 'rgba(0,0,0,0.5)';
    });
});

window.addEventListener('load', function() {
    const img = new Image();
    img.src = '../image/banner.png';
    img.onload = function() {
        document.querySelector('.hero-image').style.opacity = 1;
    };
});

