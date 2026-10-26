document.addEventListener('DOMContentLoaded', () => {

    const rows = document.querySelectorAll('.row');

    rows.forEach(row => {
        const leftArrow = row.querySelector('.left-arrow');
        const rightArrow = row.querySelector('.right-arrow');
        const postersContainer = row.querySelector('.posters-container');

        if (!postersContainer) return; // Pula se não encontrar o container

        // Função para rolar
        const scroll = (amount) => {
            // scrollBy adiciona ao scroll atual, com um efeito suave
            postersContainer.scrollBy({
                left: amount,
                behavior: 'smooth' 
            });
        };

        // Adiciona evento de clique nas setas
        if (leftArrow) {
            leftArrow.addEventListener('click', () => {
                // Pega 80% da largura visível do container para rolar
                const scrollAmount = postersContainer.clientWidth * 0.8;
                scroll(-scrollAmount);
            });
        }

        if (rightArrow) {
            rightArrow.addEventListener('click', () => {
                const scrollAmount = postersContainer.clientWidth * 0.8;
                scroll(scrollAmount);
            });
        }
    });
});
// --- ACESSIBILIDADE ---

// Alternar Alto Contraste
function toggleContraste() {
    // 1. Muda a cor do body (isso sempre existe)
    document.body.classList.toggle('alto-contraste');
    
    // 2. Procura o main-content. Se ele existir na página, muda a cor dele também.
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
        mainContent.classList.toggle('alto-contraste');
    }
}
// Controle de Tamanho de Fonte (Atualizado para funcionar com Bootstrap)
let tamanhoAtual = 100;

function aumentarFonte() {
    if(tamanhoAtual < 140) {
        tamanhoAtual += 10;
        // Agora muda no documentElement (tag HTML) em vez do body
        document.documentElement.style.fontSize = tamanhoAtual + '%'; 
    }
}

function diminuirFonte() {
    if(tamanhoAtual > 90) {
        tamanhoAtual -= 10;
        document.documentElement.style.fontSize = tamanhoAtual + '%';
    }
}
