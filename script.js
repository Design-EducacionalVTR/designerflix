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