document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.b1');
    const buttonImage = button.querySelector('.button-image');

    // Caminhos das imagens
    const defaultSrc = 'https://media.discordapp.net/attachments/1294141808951033856/1305396700415918130/buttonselec.png?ex=6732e0ea&is=67318f6a&hm=3c192489c4bb48aab3b1607de63f4bf44afc602c87f5dd0b86ac6de6e9552e87&=&format=webp&quality=lossless&width=677&height=677';
    const hoverSrc = 'https://media.discordapp.net/attachments/1294141808951033856/1305396700676096070/buttonselect.png?ex=6732e0ea&is=67318f6a&hm=21083a3861f8a3714c7d3118916ee9740e7d30cc99dd35f49a3d9e358d86f40f&=&format=webp&quality=lossless&width=677&height=677';

    // Evento de mouseover
    button.addEventListener('mouseover', () => {
        buttonImage.src = hoverSrc;
        button.style.transform = 'scale(1.2) translateY(-5px)';
        buttonImage.style.opacity = '1';
    });

    button.addEventListener('click', function() {
        window.open('discord.gg/sSnum9ytTm', '_blank');
    });
    
    // Evento de mouseout
    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1) translateY(0)';
        buttonImage.src = defaultSrc;
        buttonImage.style.opacity = '0.9';
    });

    const paralaxes = document.querySelectorAll('.parallax');
    const paralaxes2 = document.querySelectorAll('.parallax2');
    const paralaxes3 = document.querySelectorAll('.parallax3');

    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        // Calcula a distância do mouse em relação ao centro, normalizada entre -1 e 1
        const deltaX = (mouseX - centerX) / centerX;
        const deltaY = (mouseY - centerY) / centerY;

        paralaxes.forEach((quadro, index) => {
            // Define a intensidade do movimento para cada quadro paralaxe
            const intensidade = index === 0 ? 5 : 20; // O primeiro paralaxe move mais

            // Calcula a quantidade de movimento
            const moveX = deltaX * intensidade;
            const moveY = deltaY * intensidade;

            // Aplica a transformação de paralaxe usando translate3d para melhor performance
            quadro.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
        });

        paralaxes2.forEach((quadro, index) => {
            // Define a intensidade do movimento para cada quadro paralaxe
            const intensidade = index === 0 ? 10 : 10; // O primeiro paralaxe move mais

            // Calcula a quantidade de movimento
            const moveX = deltaX * intensidade;
            const moveY = deltaY * intensidade;

            // Aplica a transformação de paralaxe usando translate3d para melhor performance
            quadro.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
        quadro.style.zIndex = 20
        });

        paralaxes3.forEach((quadro, index) => {
            // Define a intensidade do movimento para cada quadro paralaxe
            const intensidade = index === 0 ? 30 : 30; // O primeiro paralaxe move mais

            // Calcula a quantidade de movimento
            const moveX = deltaX * intensidade;
            const moveY = deltaY * intensidade;

            // Aplica a transformação de paralaxe usando translate3d para melhor performance
            quadro.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
        });
    });

    // Opcional: Remover o efeito quando o mouse sair da janela
    document.addEventListener('mouseleave', () => {
        paralaxes.forEach((quadro) => {
            quadro.style.transform = `translate3d(0px, 0px, 0)`;
       });
       paralaxes2.forEach((quadro) => {
        quadro.style.transform = `translate3d(0px, 0px, 0)`;
   });
   paralaxes3.forEach((quadro) => {
    quadro.style.transform = `translate3d(0px, 0px, 0)`;
});
    });

    var frame = document.getElementById('quadro2');
    var frameRect = frame.getBoundingClientRect();
    function syncButtonPosition() {
        mediaQuery = window.matchMedia('(max-width: 800px)');
        var frameRect = frame.getBoundingClientRect();
        if (mediaQuery.matches) {
            var offsetX = window.innerWidth * 0.25; // 10vw
            var offsetY = window.innerHeight * 0.33; // 10vh
        } else {
            var offsetX = window.innerWidth * 0.028; // 10vw
            var offsetY = window.innerHeight * 0.32; // 10vh
        }
        button.style.left = frameRect.left + offsetX + 'px';
        button.style.top = frameRect.top + offsetY + 'px';
    }
    function update() {
        syncButtonPosition();
        requestAnimationFrame(update);
    }
    update();
});
