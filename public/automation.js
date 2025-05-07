const WAIT_TIME = 1 * 1000;
const botao = {
    'zoomIn': document.querySelector('#zoomInButton'),
    'zoomOut': document.querySelector('#zoomOutButton'),
    'menu': document.querySelector('#map-action-menu'),
    get imprimir_mapa() { return document.querySelectorAll('#mapmenu-print')[--document.querySelectorAll('#mapmenu-print').length] },
    get paisagem() { return document.querySelector('#print-dialog-landscape span:last-child') },
    get imagem() { return document.querySelector('#print-dialog-output-image span:last-child') },
    get a5() { return document.querySelector('.VIpgJd-xl07Ob.VIpgJd-xl07Ob-GP8zAc:last-child > div:nth-child(7)') },
    get imprimir() { return document.querySelector('button[name="print"]') }
}

function simulateClick(element) {
    const mouseDown = new MouseEvent('mousedown', {
        bubbles: true,
        cancelable: true,
        view: window
    });
    const mouseUp = new MouseEvent('mouseup', {
        bubbles: true,
        cancelable: true,
        view: window
    });
    const click = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
    });

    logMouseDown = element.dispatchEvent(mouseDown);
    logMouseUp = element.dispatchEvent(mouseUp);
    logClick = element.dispatchEvent(click);

    console.log(element, logMouseDown, logMouseUp, logClick);
}

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
async function run() {
    for (const _bt in botao) {
        console.log(_bt);
        simulateClick(botao[_bt])
        await wait(WAIT_TIME);
    }
}

run()