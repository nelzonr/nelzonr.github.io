# Bookmarklets

Scripts em forma de **bookmarklets** para automatizar rotinas e adicionar funcionalidades.

> Para arrastar os bookmarklets diretamente para a barra de favoritos, acesse **[nelzonr.github.io](https://nelzonr.github.io)**.

## O que é um Bookmarklet?

Um bookmarklet é um pequeno trecho de código JavaScript salvo como um favorito no navegador. Ao clicar nele, o código é executado na página atual.

## Como instalar manualmente

1. Copie o código do bookmarklet desejado.
2. Crie um novo favorito no navegador.
3. Cole o código no campo de URL/endereço do favorito.
4. Salve.

---

## Google My Maps

Os bookmarklets abaixo funcionam dentro do Google My Maps. Para gerar um PDF dos mapas, use-os nesta ordem:

> **importAndLoadFile** → **Frame** → **generateMAP** → **generatePDF**

---

**importAndLoadFile** — Reimporta a camada do mapa a partir de uma planilha no Google Drive e a recarrega automaticamente. Requer a [Extensão Chrome](#extensão-chrome) instalada.

```javascript
javascript:(function(action){if(typeof window.loadTerritoriosFiles!=="function"){window.loadTerritoriosFiles=action=>{if(loadTerritoriosFiles._loaded){return loadTerritoriosFiles[action]()}const style="https://nelzonr.github.io/territorios.css";const script="https://nelzonr.github.io/territorios.js";const $style=document.createElement("link");$style.href=style;$style.rel="stylesheet";$style.crossorigin="anonymous";document.head.appendChild($style);const $script=document.createElement("script");$script.src=script;$script.crossorigin="anonymous";$script.onload=function(){console.log("script Maps loaded");loadTerritoriosFiles._loaded=true;loadTerritoriosFiles.mapas=false;loadTerritoriosFiles.Maps=()=>{if(!loadTerritoriosFiles.mapas){loadTerritoriosFiles.mapas=new Maps}return loadTerritoriosFiles.mapas};loadTerritoriosFiles.__FOO__=()=>{console.warn("No action provided")};loadTerritoriosFiles.frame=()=>{Maps.frame()};loadTerritoriosFiles.importAndLoadFile=()=>{loadTerritoriosFiles.Maps().importAndLoadFile()};loadTerritoriosFiles.generateMAP=()=>{loadTerritoriosFiles.Maps().generateMAP()};loadTerritoriosFiles.generatePDF=()=>{loadTerritoriosFiles.Maps().generatePDF()};loadTerritoriosFiles(action)};$script.onerror=function(){console.error("Error loading script")};document.body.appendChild($script)}}loadTerritoriosFiles(action)})("importAndLoadFile");
```

---

**Frame** — Exibe um quadro de referência sobre o mapa indicando os limites de impressão no formato A5 paisagem. Clique novamente para ocultar.

```javascript
javascript:(function(action){if(typeof window.loadTerritoriosFiles!=="function"){window.loadTerritoriosFiles=action=>{if(loadTerritoriosFiles._loaded){return loadTerritoriosFiles[action]()}const style="https://nelzonr.github.io/territorios.css";const script="https://nelzonr.github.io/territorios.js";const $style=document.createElement("link");$style.href=style;$style.rel="stylesheet";$style.crossorigin="anonymous";document.head.appendChild($style);const $script=document.createElement("script");$script.src=script;$script.crossorigin="anonymous";$script.onload=function(){console.log("script Maps loaded");loadTerritoriosFiles._loaded=true;loadTerritoriosFiles.mapas=false;loadTerritoriosFiles.Maps=()=>{if(!loadTerritoriosFiles.mapas){loadTerritoriosFiles.mapas=new Maps}return loadTerritoriosFiles.mapas};loadTerritoriosFiles.__FOO__=()=>{console.warn("No action provided")};loadTerritoriosFiles.frame=()=>{Maps.frame()};loadTerritoriosFiles.importAndLoadFile=()=>{loadTerritoriosFiles.Maps().importAndLoadFile()};loadTerritoriosFiles.generateMAP=()=>{loadTerritoriosFiles.Maps().generateMAP()};loadTerritoriosFiles.generatePDF=()=>{loadTerritoriosFiles.Maps().generatePDF()};loadTerritoriosFiles(action)};$script.onerror=function(){console.error("Error loading script")};document.body.appendChild($script)}}loadTerritoriosFiles(action)})("frame");
```

---

**generateMAP** — Salva os ícones dos marcadores e abre o diálogo de impressão com as configurações: tamanho A5, orientação paisagem e saída em imagem.

```javascript
javascript:(function(action){if(typeof window.loadTerritoriosFiles!=="function"){window.loadTerritoriosFiles=action=>{if(loadTerritoriosFiles._loaded){return loadTerritoriosFiles[action]()}const style="https://nelzonr.github.io/territorios.css";const script="https://nelzonr.github.io/territorios.js";const $style=document.createElement("link");$style.href=style;$style.rel="stylesheet";$style.crossorigin="anonymous";document.head.appendChild($style);const $script=document.createElement("script");$script.src=script;$script.crossorigin="anonymous";$script.onload=function(){console.log("script Maps loaded");loadTerritoriosFiles._loaded=true;loadTerritoriosFiles.mapas=false;loadTerritoriosFiles.Maps=()=>{if(!loadTerritoriosFiles.mapas){loadTerritoriosFiles.mapas=new Maps}return loadTerritoriosFiles.mapas};loadTerritoriosFiles.__FOO__=()=>{console.warn("No action provided")};loadTerritoriosFiles.frame=()=>{Maps.frame()};loadTerritoriosFiles.importAndLoadFile=()=>{loadTerritoriosFiles.Maps().importAndLoadFile()};loadTerritoriosFiles.generateMAP=()=>{loadTerritoriosFiles.Maps().generateMAP()};loadTerritoriosFiles.generatePDF=()=>{loadTerritoriosFiles.Maps().generatePDF()};loadTerritoriosFiles(action)};$script.onerror=function(){console.error("Error loading script")};document.body.appendChild($script)}}loadTerritoriosFiles(action)})("generateMAP");
```

---

**generatePDF** — Executar na página de pré-visualização de impressão: remove a camada fantasma, restaura os ícones salvos pelo **generateMAP** e aplica estilos personalizados. Permite dar duplo clique em endereços para alternar quebras de linha.

```javascript
javascript:(function(action){if(typeof window.loadTerritoriosFiles!=="function"){window.loadTerritoriosFiles=action=>{if(loadTerritoriosFiles._loaded){return loadTerritoriosFiles[action]()}const style="https://nelzonr.github.io/territorios.css";const script="https://nelzonr.github.io/territorios.js";const $style=document.createElement("link");$style.href=style;$style.rel="stylesheet";$style.crossorigin="anonymous";document.head.appendChild($style);const $script=document.createElement("script");$script.src=script;$script.crossorigin="anonymous";$script.onload=function(){console.log("script Maps loaded");loadTerritoriosFiles._loaded=true;loadTerritoriosFiles.mapas=false;loadTerritoriosFiles.Maps=()=>{if(!loadTerritoriosFiles.mapas){loadTerritoriosFiles.mapas=new Maps}return loadTerritoriosFiles.mapas};loadTerritoriosFiles.__FOO__=()=>{console.warn("No action provided")};loadTerritoriosFiles.frame=()=>{Maps.frame()};loadTerritoriosFiles.importAndLoadFile=()=>{loadTerritoriosFiles.Maps().importAndLoadFile()};loadTerritoriosFiles.generateMAP=()=>{loadTerritoriosFiles.Maps().generateMAP()};loadTerritoriosFiles.generatePDF=()=>{loadTerritoriosFiles.Maps().generatePDF()};loadTerritoriosFiles(action)};$script.onerror=function(){console.error("Error loading script")};document.body.appendChild($script)}}loadTerritoriosFiles(action)})("generatePDF");
```

---

## Outros

**Botões JW** — Adiciona uma barra de ferramentas ao site JW.org com os seguintes botões:

- **IMG ALT**: exibe/oculta o texto alternativo das imagens das publicações.
- **1x / 1.5x / 2x**: controla a velocidade de reprodução do áudio.
- **PT / ES / EN** (configurável): altera o idioma da página. Clique simples carrega o conteúdo no idioma escolhido sem recarregar a página; duplo clique navega para a URL do novo idioma. Os idiomas exibidos podem ser configurados diretamente no código do bookmarklet.

```javascript
javascript:(function(){window.AG_LANGUAGES=[{label:"PT",locale:"pt",region:"r5",lp:"lp-t"},{label:"ES",locale:"es",region:"r4",lp:"lp-s"},{label:"EN",locale:"en",region:"r1",lp:"lp-e"}];(function(){const customLanguages=window.AG_LANGUAGES??null;const TOOLBAR_ID="ag-custom-toolbar";const TOOLBAR_H=44;const existing=document.getElementById(TOOLBAR_ID);if(existing)existing.remove();document.body.style.paddingTop="";const header=document.querySelector("#regionHeader");if(header)header.style.top="";const toolbar=document.createElement("div");toolbar.id=TOOLBAR_ID;toolbar.style.cssText=`\n        position: fixed;\n        top: 0;\n        left: 0;\n        right: 0;\n        z-index: 999999;\n        background: #ffffff;\n        display: flex;\n        align-items: center;\n        padding: 0 16px;\n        height: ${TOOLBAR_H}px;\n        box-shadow: 0 1px 0 #dae2e5;\n        gap: 4px;\n        font-family: 'Noto Sans', Arial, sans-serif;\n    `;function makeBtn(label,title,onClick){const btn=document.createElement("button");btn.textContent=label;btn.title=title||label;btn.style.cssText=`\n            background: transparent;\n            border: 1px solid transparent;\n            color: #4477a1;\n            font-size: 13px;\n            font-family: inherit;\n            padding: 4px 10px;\n            border-radius: 4px;\n            cursor: pointer;\n            transition: background 0.15s, border-color 0.15s;\n            white-space: nowrap;\n            line-height: 1;\n        `;btn.addEventListener("mouseenter",()=>{if(!btn.dataset.active){btn.style.background="#f2f1ef";btn.style.borderColor="#dae2e5"}});btn.addEventListener("mouseleave",()=>{if(!btn.dataset.active){btn.style.background="transparent";btn.style.borderColor="transparent"}});btn.addEventListener("click",onClick);return btn}function setActive(btn){btn.style.background="#f2f1ef";btn.style.borderColor="#dae2e5";btn.style.color="#4477a1";btn.dataset.active="1"}function setInactive(btn){btn.style.background="transparent";btn.style.borderColor="transparent";btn.style.color="#4477a1";delete btn.dataset.active}function makeSep(){const sep=document.createElement("div");sep.style.cssText=`\n            width: 1px;\n            height: 22px;\n            background: #dae2e5;\n            margin: 0 6px;\n        `;return sep}let altVisible=false;const altBtn=makeBtn("IMG ALT","Mostrar/ocultar texto alternativo das imagens",()=>{altVisible=!altVisible;const imgs=document.querySelectorAll("article img, #article img, .docSubContent img, .bodyTxt img");imgs.forEach(img=>{const overlay=img.nextSibling;if(overlay&&overlay.classList&&overlay.classList.contains("ag-alt-overlay")){overlay.remove()}else if(altVisible){const altText=img.getAttribute("alt");if(altText&&altText.trim()){const span=document.createElement("span");span.className="ag-alt-overlay";span.textContent=altText;span.style.cssText=`\n                        display: inline-block;\n                        background: #f2f1ef;\n                        color: #4477a1;\n                        font-size: 13px;\n                        padding: 5px 10px;\n                        border-radius: 3px;\n                        vertical-align: middle;\n                        font-family: 'Noto Sans', Arial, sans-serif;\n                    `;img.parentNode.insertBefore(span,img.nextSibling)}}});altVisible?setActive(altBtn):setInactive(altBtn)});toolbar.appendChild(altBtn);toolbar.appendChild(makeSep());altBtn.click();const speeds=[1,1.5,2];const speedBtns={};speeds.forEach(speed=>{const btn=makeBtn(`${speed}x`,`Velocidade de áudio ${speed}x`,()=>{document.querySelectorAll("audio").forEach(a=>{a.playbackRate=speed});Object.entries(speedBtns).forEach(([v,b])=>{parseFloat(v)===speed?setActive(b):setInactive(b)})});speedBtns[speed]=btn;toolbar.appendChild(btn)});setActive(speedBtns[1]);toolbar.appendChild(makeSep());const LANGUAGES=customLanguages??[{label:"PT",locale:"pt",region:"r5",lp:"lp-t"},{label:"ES",locale:"es",region:"r4",lp:"lp-s"},{label:"EN",locale:"en",region:"r1",lp:"lp-e"}];function buildLangUrl({locale:locale,region:region,lp:lp}){const match=location.pathname.match(/^\/[^/]+\/wol\/d\/[^/]+\/[^/]+\/(.+)$/);const docId=match?match[1]:"";return`https://wol.jw.org/${locale}/wol/d/${region}/${lp}/${docId}`}async function loadInPlace({locale:locale,region:region,lp:lp}){const url=buildLangUrl({locale:locale,region:region,lp:lp});try{const res=await fetch(url,{credentials:"include"});if(!res.ok)throw new Error(`HTTP ${res.status}`);const doc=(new DOMParser).parseFromString(await res.text(),"text/html");const newContent=doc.querySelector("#article");const currentContent=document.querySelector("#article");if(newContent&&currentContent){currentContent.innerHTML=newContent.innerHTML;history.pushState({},"",url)}}catch(err){console.error("[jw_buttons_bar] Erro ao carregar idioma in-place:",err)}}const currentLocale=location.pathname.split("/")[1];LANGUAGES.forEach(({label:label,locale:locale,region:region,lp:lp},i)=>{const isActive=locale===currentLocale;const btn=makeBtn(label,buildLangUrl({locale:locale,region:region,lp:lp}),()=>{});if(i===0)btn.style.marginLeft="auto";if(isActive)setActive(btn);let clickTimer=null;btn.addEventListener("click",()=>{if(isActive)return;if(clickTimer){clearTimeout(clickTimer);clickTimer=null;location.href=buildLangUrl({locale:locale,region:region,lp:lp})}else{clickTimer=setTimeout(()=>{clickTimer=null;loadInPlace({locale:locale,region:region,lp:lp})},250)}});toolbar.appendChild(btn)});document.body.style.paddingTop=`${TOOLBAR_H}px`;if(header)header.style.top=`${TOOLBAR_H}px`;document.body.insertAdjacentElement("afterbegin",toolbar)})();})();
```

---

## Extensão Chrome

A extensão Chrome (`chrome-extension/`) é necessária para o bookmarklet **importAndLoadFile** funcionar. Ela permite acesso ao iframe do Google Drive Picker, que é cross-origin e inacessível a bookmarklets por conta das restrições de segurança do navegador.

Para instalar:

1. Acesse `chrome://extensions` no Chrome.
2. Ative o **Modo do desenvolvedor** (canto superior direito).
3. Clique em **Carregar sem compactação** e selecione a pasta `chrome-extension/` deste repositório.
