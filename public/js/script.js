// JavaScript para funcionalidades interativas da landing page para petshops

document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidade do FAQ (acordeão)
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Fecha todos os outros itens
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Alterna o estado do item atual
            item.classList.toggle('active');
        });
    });
    
    // Funcionalidade do chat flutuante
    const chatButton = document.querySelector('.chat-button');
    const chatBubble = document.querySelector('.chat-bubble');
    
    chatButton.addEventListener('click', () => {
        // Simula redirecionamento para WhatsApp
        window.open('https://wa.me/5511984683865?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Atendente%20Virtual%20para%20meu%20petshop.', '_blank');
    });
    
    // Mostra/esconde a bolha de chat em dispositivos móveis
    function toggleChatBubble() {
        if (window.innerWidth <= 768) {
            chatBubble.style.display = 'none';
        } else {
            chatBubble.style.display = 'block';
        }
    }
    
    // Verifica no carregamento e no redimensionamento
    toggleChatBubble();
    window.addEventListener('resize', toggleChatBubble);
    
    // Animação suave para links de navegação
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Menu responsivo (para versão mobile)
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    
    const header = document.querySelector('.header .container');
    const nav = document.querySelector('.nav');
    
    if (header && nav) {
        header.insertBefore(menuToggle, nav);
        
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            menuToggle.classList.toggle('active');
            
            if (menuToggle.classList.contains('active')) {
                menuToggle.innerHTML = '<i class="fas fa-times"></i>';
            } else {
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    }
    
    // Adiciona classe ativa ao primeiro item do FAQ para mostrar como exemplo
    if (faqItems.length > 0) {
        faqItems[0].classList.add('active');
    }
    
    // Simulação de contador de estatísticas
    const statNumbers = document.querySelectorAll('.stat-item h2');
    
    if (statNumbers.length > 0) {
        statNumbers.forEach(stat => {
            const targetNumber = parseInt(stat.textContent);
            let currentNumber = 0;
            const duration = 2000; // 2 segundos
            const interval = 50; // 50ms entre cada atualização
            const steps = duration / interval;
            const increment = targetNumber / steps;
            
            const counter = setInterval(() => {
                currentNumber += increment;
                
                if (currentNumber >= targetNumber) {
                    stat.textContent = targetNumber + '%';
                    clearInterval(counter);
                } else {
                    stat.textContent = Math.floor(currentNumber) + '%';
                }
            }, interval);
        });
    }
    
    // Efeito de destaque para serviços de petshop
    const serviceItems = document.querySelectorAll('.service-item');
    
    serviceItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-10px)';
            item.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0)';
            item.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // Formulário de demonstração (modal)
    const demoButtons = document.querySelectorAll('.btn-primary');
    
    demoButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            if (button.textContent.includes('DEMONSTRAÇÃO') || 
                button.textContent.includes('demonstração') ||
                button.textContent.includes('AGENDE') || 
                button.textContent.includes('SOLICITE')) {
                e.preventDefault();
                window.open('https://wa.me/5511984683865?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Atendente%20Virtual%20para%20meu%20petshop.', '_blank');
                //alert('Obrigado pelo interesse! Em uma implementação real, aqui abriria um formulário para solicitar uma demonstração da Atendente Virtual para seu petshop.');
            }
        });
    });
    
    // Efeito de hover para recursos exclusivos
    const resourceItems = document.querySelectorAll('.resource-item');
    
    resourceItems.forEach(item => {
        const icon = item.querySelector('.resource-icon');
        
        item.addEventListener('mouseenter', () => {
            icon.style.backgroundColor = '#FF9800'; // Cor secundária (laranja)
            icon.style.transform = 'scale(1.1)';
        });
        
        item.addEventListener('mouseleave', () => {
            icon.style.backgroundColor = '#4CAF50'; // Cor primária (verde)
            icon.style.transform = 'scale(1)';
        });
    });
    
    // Efeito de destaque para depoimentos
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    testimonialCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
            card.style.borderColor = '#4CAF50';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            card.style.borderColor = '#f0f0f0';
        });
    });
    
    // Animação de patinhas (easter egg)
    document.addEventListener('mousemove', (e) => {
        // Limita a criação de patinhas (1 a cada 100 pixels de movimento)
        if (Math.random() > 0.99) {
            const paw = document.createElement('div');
            paw.className = 'paw-print';
            paw.style.left = e.pageX + 'px';
            paw.style.top = e.pageY + 'px';
            paw.style.transform = `rotate(${Math.random() * 360}deg)`;
            
            document.body.appendChild(paw);
            
            // Remove a patinha após a animação
            setTimeout(() => {
                paw.remove();
            }, 2000);
        }
    });
    
    // Adiciona estilos CSS para a animação de patinhas
    const pawStyle = document.createElement('style');
    pawStyle.textContent = `
        .paw-print {
            position: absolute;
            width: 20px;
            height: 20px;
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="%234CAF50" d="M256 224c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144zm0 240c-52.9 0-96-43.1-96-96s43.1-96 96-96 96 43.1 96 96-43.1 96-96 96zm76.8-314.1C326.3 124.4 293.1 112 256 112s-70.3 12.4-76.8 37.9c-2 7.9 2.9 15.9 10.7 17.9 7.9 2 15.9-2.9 17.9-10.7 1.2-4.9 21.8-13.1 48.2-13.1s47 8.2 48.2 13.1c1.6 6.4 7.3 10.7 13.7 10.7 1.4 0 2.8-.2 4.2-.6 7.8-2 12.7-10 10.7-17.9zM144 224c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm0 48c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm224-48c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm0 48c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z"/></svg>');
            background-size: contain;
            background-repeat: no-repeat;
            opacity: 0.5;
            pointer-events: none;
            z-index: 9999;
            animation: pawFade 2s forwards;
        }
        
        @keyframes pawFade {
            0% { opacity: 0.7; transform: scale(0.5); }
            50% { opacity: 0.5; transform: scale(1); }
            100% { opacity: 0; transform: scale(0.8); }
        }
    `;
    
    document.head.appendChild(pawStyle);
});
