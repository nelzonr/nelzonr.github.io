function removeFirstLayer() {
    const camadas = document.getElementsByClassName('pbTTYe');
    for (const camada of camadas) {
        if (camada.innerText == 'Todas direcciones GHOST\nTodos os itens') {
            camada.remove();
        }
    }
}

function replaceIcons() {
    if (window.icones == undefined || window.icones.lenght < 1) {
        console.warn('Sem imagens.');
        return;
    }

    document.body.querySelectorAll('.pbTTYe img').forEach(function(imagem, index) {
        imagem.src = icones[index]
    })
}

removeFirstLayer();
replaceIcons();