(function () {
    const customLanguages = window.AG_LANGUAGES ?? null;
    const TOOLBAR_ID = 'ag-custom-toolbar';
    const TOOLBAR_H = 44;

    // Idempotente: remove barra existente e restaura estilos antes de recriar
    const existing = document.getElementById(TOOLBAR_ID);
    if (existing) existing.remove();
    document.body.style.paddingTop = '';
    const header = document.querySelector('#regionHeader');
    if (header) header.style.top = '';

    // --- Toolbar ---
    const toolbar = document.createElement('div');
    toolbar.id = TOOLBAR_ID;
    toolbar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 999999;
        background: #ffffff;
        display: flex;
        align-items: center;
        padding: 0 16px;
        height: ${TOOLBAR_H}px;
        box-shadow: 0 1px 0 #dae2e5;
        gap: 4px;
        font-family: 'Noto Sans', Arial, sans-serif;
    `;

    function makeBtn(label, title, onClick) {
        const btn = document.createElement('button');
        btn.textContent = label;
        btn.title = title || label;
        btn.style.cssText = `
            background: transparent;
            border: 1px solid transparent;
            color: #4477a1;
            font-size: 13px;
            font-family: inherit;
            padding: 4px 10px;
            border-radius: 4px;
            cursor: pointer;
            transition: background 0.15s, border-color 0.15s;
            white-space: nowrap;
            line-height: 1;
        `;
        btn.addEventListener('mouseenter', () => {
            if (!btn.dataset.active) {
                btn.style.background = '#f2f1ef';
                btn.style.borderColor = '#dae2e5';
            }
        });
        btn.addEventListener('mouseleave', () => {
            if (!btn.dataset.active) {
                btn.style.background = 'transparent';
                btn.style.borderColor = 'transparent';
            }
        });
        btn.addEventListener('click', onClick);
        return btn;
    }

    function setActive(btn) {
        btn.style.background = '#f2f1ef';
        btn.style.borderColor = '#dae2e5';
        btn.style.color = '#4477a1';
        btn.dataset.active = '1';
    }

    function setInactive(btn) {
        btn.style.background = 'transparent';
        btn.style.borderColor = 'transparent';
        btn.style.color = '#4477a1';
        delete btn.dataset.active;
    }

    function makeSep() {
        const sep = document.createElement('div');
        sep.style.cssText = `
            width: 1px;
            height: 22px;
            background: #dae2e5;
            margin: 0 6px;
        `;
        return sep;
    }

    // --- IMG ALT ---
    let altVisible = false;
    const altBtn = makeBtn('IMG ALT', 'Mostrar/ocultar texto alternativo das imagens', () => {
        altVisible = !altVisible;
        const imgs = document.querySelectorAll('article img, #article img, .docSubContent img, .bodyTxt img');
        imgs.forEach(img => {
            const overlay = img.nextSibling;
            if (overlay && overlay.classList && overlay.classList.contains('ag-alt-overlay')) {
                overlay.remove();
            } else if (altVisible) {
                const altText = img.getAttribute('alt');
                if (altText && altText.trim()) {
                    const span = document.createElement('span');
                    span.className = 'ag-alt-overlay';
                    span.textContent = altText;
                    span.style.cssText = `
                        display: inline-block;
                        background: #f2f1ef;
                        color: #4477a1;
                        font-size: 13px;
                        padding: 5px 10px;
                        border-radius: 3px;
                        vertical-align: middle;
                        font-family: 'Noto Sans', Arial, sans-serif;
                    `;
                    img.parentNode.insertBefore(span, img.nextSibling);
                }
            }
        });
        altVisible ? setActive(altBtn) : setInactive(altBtn);
    });
    toolbar.appendChild(altBtn);
    toolbar.appendChild(makeSep());
    altBtn.click();

    // --- Audio Speed ---
    const speeds = [1, 1.5, 2];
    const speedBtns = {};

    speeds.forEach(speed => {
        const btn = makeBtn(`${speed}x`, `Velocidade de áudio ${speed}x`, () => {
            document.querySelectorAll('audio').forEach(a => { a.playbackRate = speed; });
            Object.entries(speedBtns).forEach(([v, b]) => {
                parseFloat(v) === speed ? setActive(b) : setInactive(b);
            });
        });
        speedBtns[speed] = btn;
        toolbar.appendChild(btn);
    });
    setActive(speedBtns[1]);
    toolbar.appendChild(makeSep());

    // --- Language (PT / ES / EN) ---
    const LANGUAGES = customLanguages ?? [
        { label: 'PT', locale: 'pt', region: 'r5', lp: 'lp-t' },
        { label: 'ES', locale: 'es', region: 'r4', lp: 'lp-s' },
        { label: 'EN', locale: 'en', region: 'r1', lp: 'lp-e' },
    ];

    function buildLangUrl({ locale, region, lp }) {
        const match = location.pathname.match(/^\/[^/]+\/wol\/d\/[^/]+\/[^/]+\/(.+)$/);
        const docId = match ? match[1] : '';
        return `https://wol.jw.org/${locale}/wol/d/${region}/${lp}/${docId}`;
    }

    async function loadInPlace({ locale, region, lp }) {
        const url = buildLangUrl({ locale, region, lp });
        try {
            const res = await fetch(url, { credentials: 'include' });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const doc = new DOMParser().parseFromString(await res.text(), 'text/html');
            const newContent = doc.querySelector('#article');
            const currentContent = document.querySelector('#article');
            if (newContent && currentContent) {
                currentContent.innerHTML = newContent.innerHTML;
                history.pushState({}, '', url);
            }
        } catch (err) {
            console.error('[jw_buttons_bar] Erro ao carregar idioma in-place:', err);
        }
    }

    const currentLocale = location.pathname.split('/')[1];

    LANGUAGES.forEach(({ label, locale, region, lp }, i) => {
        const isActive = locale === currentLocale;
        const btn = makeBtn(label, buildLangUrl({ locale, region, lp }), () => {});
        if (i === 0) btn.style.marginLeft = 'auto';
        if (isActive) setActive(btn);

        // Simgle click: carrega in-place; duplo clique: navega normalmente
        let clickTimer = null;
        btn.addEventListener('click', () => {
            if (isActive) return;
            if (clickTimer) {
                clearTimeout(clickTimer);
                clickTimer = null;
                location.href = buildLangUrl({ locale, region, lp });
            } else {
                clickTimer = setTimeout(() => {
                    clickTimer = null;
                    loadInPlace({ locale, region, lp });
                }, 250);
            }
        });

        toolbar.appendChild(btn);
    });

    // Empurra conteúdo da página para baixo da barra
    document.body.style.paddingTop = `${TOOLBAR_H}px`;
    if (header) header.style.top = `${TOOLBAR_H}px`;

    document.body.insertAdjacentElement('afterbegin', toolbar);
})();
