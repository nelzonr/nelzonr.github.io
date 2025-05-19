class Maps {
    constructor() {
        window.$ = window.$ || document.querySelector;
        window.$$ = window.$$ || document.querySelectorAll;
        this.WAIT_TIME_MS = 500;
        this.BUTTONS = {
            get zoomIn() { return $('#zoomInButton') },
            get menu() { return $('#map-action-menu') },
            get imprimir_mapa() { return $$('#mapmenu-print')[--$$('#mapmenu-print').length] },
            get paisagem() { return $('#print-dialog-landscape span:last-child') },
            get imagem() { return $('#print-dialog-output-image span:last-child') },
            get a5() { return $('.VIpgJd-xl07Ob.VIpgJd-xl07Ob-GP8zAc:last-child > div:nth-child(7)') },
            get imprimir() { return $('button[name="print"]') },
            get zoomOut() { return $('#zoomOutButton') }
        };
        this.LAYERS = {
            get all() { return document.getElementsByClassName('pbTTYe') },
            get icones_div() { return $$('.un1lmc-pbTTYe-ibnC6b-BwqjC') },
            get icones_image() { return $$('.pbTTYe img') },
            get enderecos() { return $$('.un1lmc-pbTTYe-ibnC6b-r4nke') }
        };

        if ($$('#print').length > 0) {
            $('body').classList.add('print')
        }
    }

    async wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    simulateClick(element) {
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
    
        element.dispatchEvent(mouseDown);
        element.dispatchEvent(mouseUp);
        element.dispatchEvent(click);
    }

    getIconsMap() {
        const icones = [];
        for (const icone of this.LAYERS['icones_div'].slice(1)) {
            icones.push(icone.style.backgroundImage.split('"')[1]);
        }
        return icones;
    }

    setIcons() {
        const icones = JSON.stringify(this.getIconsMap())
        localStorage.setItem('icones', icones);
    }

    getIcons() {
        const icones = JSON.parse(localStorage.getItem('icones'));
        return icones;
    }

    replaceIcons() {
        const icones = this.getIcons();
        if (icones.length > 0) {
            this.LAYERS['icones_image'].forEach(function(imagem, index) {
                imagem.src = icones[index];
            })
        }
    }

    removeFirstLayer() {
        for (const layer of this.LAYERS['all']) {
            if (layer.innerText.includes('Todos os itens')) {
                layer.remove();
            }
        }
    }

    addEventReplaceBr() {
        this.LAYERS['enderecos'].forEach(function(div) {
            div.addEventListener("dblclick", function () {
                if (div.innerHTML.includes("<br>")) {
                    div.innerHTML = div.innerHTML.replace(/<br>/g, '');
                } else {
                    div.innerHTML = div.innerHTML.replace(/#/g, '<br>#');
                }
            });
        });
    }

    static frame() {
        const $molduras = document.querySelectorAll('.moldura');

        if ($molduras.length < 1) {
            const elementos = ['t', 'r', 'b', 'l'];
            for (const elemento of elementos) {
                const div = document.createElement('div');
                div.classList.add('moldura', elemento);
                document.body.appendChild(div);
            }
        } else if ($molduras[0].style.display == 'none') {
            $molduras.forEach(function($moldura) {
                $moldura.style.display = 'block';
            });
        } else {
            $molduras.forEach(function($moldura) {
                $moldura.style.display = 'none';
            });
        }
    }

    async generateMAP() {
        this.setIcons();
        for (const button in this.BUTTONS) {
            this.simulateClick(this.BUTTONS[button]);
            await this.wait(this.WAIT_TIME_MS);
        }
    }

    generatePDF() {
        this.removeFirstLayer();
        this.replaceIcons();
        this.addEventReplaceBr();
    }
}

// Maps.frame();
// const mapa = new Maps();
// mapa.generateMAP();
// mapa.generatePDF();