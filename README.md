# Bookmarklets

Scripts em forma de **bookmarklets** para automatizar rotinas e adicionar funcionalidades.

## O que é um Bookmarklet?

Um bookmarklet é um pequeno trecho de código JavaScript salvo como um favorito no navegador. Ao clicar nele, o código é executado na página atual.

## Como instalar

**Arraste o link do bookmarklet** diretamente para a barra de favoritos do seu navegador.

Ou manualmente:

1. Copie o código do bookmarklet desejado.
2. Crie um novo favorito no navegador.
3. Cole o código no campo de URL/endereço do favorito.
4. Salve.

---

## Google My Maps

Os bookmarklets abaixo funcionam dentro do Google My Maps. Para gerar um PDF dos mapas, use-os nesta ordem:

>  **importAndLoadFile** → **Frame** →**generateMAP** → **generatePDF**

---

* **<a href='javascript:(function(action){if(typeof window.loadTerritoriosFiles!=="function"){window.loadTerritoriosFiles=action=>{if(loadTerritoriosFiles._loaded){return loadTerritoriosFiles[action]()}const style="https://nelzonr.github.io/territorios.css";const script="https://nelzonr.github.io/territorios.js";const $style=document.createElement("link");$style.href=style;$style.rel="stylesheet";$style.crossorigin="anonymous";document.head.appendChild($style);const $script=document.createElement("script");$script.src=script;$script.crossorigin="anonymous";$script.onload=function(){console.log("script Maps loaded");loadTerritoriosFiles._loaded=true;loadTerritoriosFiles.mapas=false;loadTerritoriosFiles.Maps=()=>{if(!loadTerritoriosFiles.mapas){loadTerritoriosFiles.mapas=new Maps}return loadTerritoriosFiles.mapas};loadTerritoriosFiles.__FOO__=()=>{console.warn("No action provided")};loadTerritoriosFiles.frame=()=>{Maps.frame()};loadTerritoriosFiles.importAndLoadFile=()=>{loadTerritoriosFiles.Maps().importAndLoadFile()};loadTerritoriosFiles.generateMAP=()=>{loadTerritoriosFiles.Maps().generateMAP()};loadTerritoriosFiles.generatePDF=()=>{loadTerritoriosFiles.Maps().generatePDF()};loadTerritoriosFiles(action)};$script.onerror=function(){console.error("Error loading script")};document.body.appendChild($script)}}loadTerritoriosFiles(action)})("importAndLoadFile");'>importAndLoadFile</a>** — Reimporta a camada do mapa a partir de uma planilha no Google Drive e a recarrega automaticamente. Requer a [Extensão Chrome](#extensão-chrome) instalada.
    ```javascript
    javascript:(function(action){if(typeof window.loadTerritoriosFiles!=="function"){window.loadTerritoriosFiles=action=>{if(loadTerritoriosFiles._loaded){return loadTerritoriosFiles[action]()}const style="https://nelzonr.github.io/territorios.css";const script="https://nelzonr.github.io/territorios.js";const $style=document.createElement("link");$style.href=style;$style.rel="stylesheet";$style.crossorigin="anonymous";document.head.appendChild($style);const $script=document.createElement("script");$script.src=script;$script.crossorigin="anonymous";$script.onload=function(){console.log("script Maps loaded");loadTerritoriosFiles._loaded=true;loadTerritoriosFiles.mapas=false;loadTerritoriosFiles.Maps=()=>{if(!loadTerritoriosFiles.mapas){loadTerritoriosFiles.mapas=new Maps}return loadTerritoriosFiles.mapas};loadTerritoriosFiles.__FOO__=()=>{console.warn("No action provided")};loadTerritoriosFiles.frame=()=>{Maps.frame()};loadTerritoriosFiles.importAndLoadFile=()=>{loadTerritoriosFiles.Maps().importAndLoadFile()};loadTerritoriosFiles.generateMAP=()=>{loadTerritoriosFiles.Maps().generateMAP()};loadTerritoriosFiles.generatePDF=()=>{loadTerritoriosFiles.Maps().generatePDF()};loadTerritoriosFiles(action)};$script.onerror=function(){console.error("Error loading script")};document.body.appendChild($script)}}loadTerritoriosFiles(action)})("importAndLoadFile");
    ```

* **<a href='javascript:(function(action){if(typeof window.loadTerritoriosFiles!=="function"){window.loadTerritoriosFiles=action=>{if(loadTerritoriosFiles._loaded){return loadTerritoriosFiles[action]()}const style="https://nelzonr.github.io/territorios.css";const script="https://nelzonr.github.io/territorios.js";const $style=document.createElement("link");$style.href=style;$style.rel="stylesheet";$style.crossorigin="anonymous";document.head.appendChild($style);const $script=document.createElement("script");$script.src=script;$script.crossorigin="anonymous";$script.onload=function(){console.log("script Maps loaded");loadTerritoriosFiles._loaded=true;loadTerritoriosFiles.mapas=false;loadTerritoriosFiles.Maps=()=>{if(!loadTerritoriosFiles.mapas){loadTerritoriosFiles.mapas=new Maps}return loadTerritoriosFiles.mapas};loadTerritoriosFiles.__FOO__=()=>{console.warn("No action provided")};loadTerritoriosFiles.frame=()=>{Maps.frame()};loadTerritoriosFiles.importAndLoadFile=()=>{loadTerritoriosFiles.Maps().importAndLoadFile()};loadTerritoriosFiles.generateMAP=()=>{loadTerritoriosFiles.Maps().generateMAP()};loadTerritoriosFiles.generatePDF=()=>{loadTerritoriosFiles.Maps().generatePDF()};loadTerritoriosFiles(action)};$script.onerror=function(){console.error("Error loading script")};document.body.appendChild($script)}}loadTerritoriosFiles(action)})("frame");'>Frame</a>** — Exibe um quadro de referência sobre o mapa indicando os limites de impressão no formato A5 paisagem. Clique novamente para ocultar.
    ```javascript
    javascript:(function(action){if(typeof window.loadTerritoriosFiles!=="function"){window.loadTerritoriosFiles=action=>{if(loadTerritoriosFiles._loaded){return loadTerritoriosFiles[action]()}const style="https://nelzonr.github.io/territorios.css";const script="https://nelzonr.github.io/territorios.js";const $style=document.createElement("link");$style.href=style;$style.rel="stylesheet";$style.crossorigin="anonymous";document.head.appendChild($style);const $script=document.createElement("script");$script.src=script;$script.crossorigin="anonymous";$script.onload=function(){console.log("script Maps loaded");loadTerritoriosFiles._loaded=true;loadTerritoriosFiles.mapas=false;loadTerritoriosFiles.Maps=()=>{if(!loadTerritoriosFiles.mapas){loadTerritoriosFiles.mapas=new Maps}return loadTerritoriosFiles.mapas};loadTerritoriosFiles.__FOO__=()=>{console.warn("No action provided")};loadTerritoriosFiles.frame=()=>{Maps.frame()};loadTerritoriosFiles.importAndLoadFile=()=>{loadTerritoriosFiles.Maps().importAndLoadFile()};loadTerritoriosFiles.generateMAP=()=>{loadTerritoriosFiles.Maps().generateMAP()};loadTerritoriosFiles.generatePDF=()=>{loadTerritoriosFiles.Maps().generatePDF()};loadTerritoriosFiles(action)};$script.onerror=function(){console.error("Error loading script")};document.body.appendChild($script)}}loadTerritoriosFiles(action)})("frame");
    ```

* **<a href='javascript:(function(action){if(typeof window.loadTerritoriosFiles!=="function"){window.loadTerritoriosFiles=action=>{if(loadTerritoriosFiles._loaded){return loadTerritoriosFiles[action]()}const style="https://nelzonr.github.io/territorios.css";const script="https://nelzonr.github.io/territorios.js";const $style=document.createElement("link");$style.href=style;$style.rel="stylesheet";$style.crossorigin="anonymous";document.head.appendChild($style);const $script=document.createElement("script");$script.src=script;$script.crossorigin="anonymous";$script.onload=function(){console.log("script Maps loaded");loadTerritoriosFiles._loaded=true;loadTerritoriosFiles.mapas=false;loadTerritoriosFiles.Maps=()=>{if(!loadTerritoriosFiles.mapas){loadTerritoriosFiles.mapas=new Maps}return loadTerritoriosFiles.mapas};loadTerritoriosFiles.__FOO__=()=>{console.warn("No action provided")};loadTerritoriosFiles.frame=()=>{Maps.frame()};loadTerritoriosFiles.importAndLoadFile=()=>{loadTerritoriosFiles.Maps().importAndLoadFile()};loadTerritoriosFiles.generateMAP=()=>{loadTerritoriosFiles.Maps().generateMAP()};loadTerritoriosFiles.generatePDF=()=>{loadTerritoriosFiles.Maps().generatePDF()};loadTerritoriosFiles(action)};$script.onerror=function(){console.error("Error loading script")};document.body.appendChild($script)}}loadTerritoriosFiles(action)})("generateMAP");'>generateMAP</a>** — Salva os ícones dos marcadores e abre o diálogo de impressão com as configurações: tamanho A5, orientação paisagem e saída em imagem.
    ```javascript
    javascript:(function(action){if(typeof window.loadTerritoriosFiles!=="function"){window.loadTerritoriosFiles=action=>{if(loadTerritoriosFiles._loaded){return loadTerritoriosFiles[action]()}const style="https://nelzonr.github.io/territorios.css";const script="https://nelzonr.github.io/territorios.js";const $style=document.createElement("link");$style.href=style;$style.rel="stylesheet";$style.crossorigin="anonymous";document.head.appendChild($style);const $script=document.createElement("script");$script.src=script;$script.crossorigin="anonymous";$script.onload=function(){console.log("script Maps loaded");loadTerritoriosFiles._loaded=true;loadTerritoriosFiles.mapas=false;loadTerritoriosFiles.Maps=()=>{if(!loadTerritoriosFiles.mapas){loadTerritoriosFiles.mapas=new Maps}return loadTerritoriosFiles.mapas};loadTerritoriosFiles.__FOO__=()=>{console.warn("No action provided")};loadTerritoriosFiles.frame=()=>{Maps.frame()};loadTerritoriosFiles.importAndLoadFile=()=>{loadTerritoriosFiles.Maps().importAndLoadFile()};loadTerritoriosFiles.generateMAP=()=>{loadTerritoriosFiles.Maps().generateMAP()};loadTerritoriosFiles.generatePDF=()=>{loadTerritoriosFiles.Maps().generatePDF()};loadTerritoriosFiles(action)};$script.onerror=function(){console.error("Error loading script")};document.body.appendChild($script)}}loadTerritoriosFiles(action)})("generateMAP");
    ```

* **<a href='javascript:(function(action){if(typeof window.loadTerritoriosFiles!=="function"){window.loadTerritoriosFiles=action=>{if(loadTerritoriosFiles._loaded){return loadTerritoriosFiles[action]()}const style="https://nelzonr.github.io/territorios.css";const script="https://nelzonr.github.io/territorios.js";const $style=document.createElement("link");$style.href=style;$style.rel="stylesheet";$style.crossorigin="anonymous";document.head.appendChild($style);const $script=document.createElement("script");$script.src=script;$script.crossorigin="anonymous";$script.onload=function(){console.log("script Maps loaded");loadTerritoriosFiles._loaded=true;loadTerritoriosFiles.mapas=false;loadTerritoriosFiles.Maps=()=>{if(!loadTerritoriosFiles.mapas){loadTerritoriosFiles.mapas=new Maps}return loadTerritoriosFiles.mapas};loadTerritoriosFiles.__FOO__=()=>{console.warn("No action provided")};loadTerritoriosFiles.frame=()=>{Maps.frame()};loadTerritoriosFiles.importAndLoadFile=()=>{loadTerritoriosFiles.Maps().importAndLoadFile()};loadTerritoriosFiles.generateMAP=()=>{loadTerritoriosFiles.Maps().generateMAP()};loadTerritoriosFiles.generatePDF=()=>{loadTerritoriosFiles.Maps().generatePDF()};loadTerritoriosFiles(action)};$script.onerror=function(){console.error("Error loading script")};document.body.appendChild($script)}}loadTerritoriosFiles(action)})("generatePDF");'>generatePDF</a>** — Executar na página de pré-visualização de impressão: remove a camada fantasma, restaura os ícones salvos pelo **generateMAP** e aplica estilos personalizados. Permite dar duplo clique em endereços para alternar quebras de linha.
    ```javascript
    javascript:(function(action){if(typeof window.loadTerritoriosFiles!=="function"){window.loadTerritoriosFiles=action=>{if(loadTerritoriosFiles._loaded){return loadTerritoriosFiles[action]()}const style="https://nelzonr.github.io/territorios.css";const script="https://nelzonr.github.io/territorios.js";const $style=document.createElement("link");$style.href=style;$style.rel="stylesheet";$style.crossorigin="anonymous";document.head.appendChild($style);const $script=document.createElement("script");$script.src=script;$script.crossorigin="anonymous";$script.onload=function(){console.log("script Maps loaded");loadTerritoriosFiles._loaded=true;loadTerritoriosFiles.mapas=false;loadTerritoriosFiles.Maps=()=>{if(!loadTerritoriosFiles.mapas){loadTerritoriosFiles.mapas=new Maps}return loadTerritoriosFiles.mapas};loadTerritoriosFiles.__FOO__=()=>{console.warn("No action provided")};loadTerritoriosFiles.frame=()=>{Maps.frame()};loadTerritoriosFiles.importAndLoadFile=()=>{loadTerritoriosFiles.Maps().importAndLoadFile()};loadTerritoriosFiles.generateMAP=()=>{loadTerritoriosFiles.Maps().generateMAP()};loadTerritoriosFiles.generatePDF=()=>{loadTerritoriosFiles.Maps().generatePDF()};loadTerritoriosFiles(action)};$script.onerror=function(){console.error("Error loading script")};document.body.appendChild($script)}}loadTerritoriosFiles(action)})("generatePDF");
    ```

---

## Outros

* **<a href='javascript:(function(){window.AG_LANGUAGES=[{label:"PT",locale:"pt",region:"r5",lp:"lp-t"},{label:"ES",locale:"es",region:"r4",lp:"lp-s"},{label:"EN",locale:"en",region:"r1",lp:"lp-e"}];var s=document.createElement("script");s.src="https://nelzonr.github.io/custom_bar.min.js";document.head.appendChild(s)})();'>Botões JW</a>** — Adiciona uma barra de ferramentas ao site JW.org com os seguintes botões:
  - **IMG ALT**: exibe/oculta o texto alternativo das imagens das publicações.
  - **1x / 1.5x / 2x**: controla a velocidade de reprodução do áudio.
  - **PT / ES / EN** (configurável): altera o idioma da página. Clique simples carrega o conteúdo no idioma escolhido sem recarregar a página; duplo clique navega para a URL do novo idioma. Os idiomas exibidos podem ser configurados diretamente no código do bookmarklet.
    ```javascript
    javascript:(function(){window.AG_LANGUAGES=[{label:"PT",locale:"pt",region:"r5",lp:"lp-t"},{label:"ES",locale:"es",region:"r4",lp:"lp-s"},{label:"EN",locale:"en",region:"r1",lp:"lp-e"}];var s=document.createElement("script");s.src="https://nelzonr.github.io/custom_bar.min.js";document.head.appendChild(s)})();
    ```

---

## Extensão Chrome

A extensão Chrome (`chrome-extension/`) é necessária para o bookmarklet **importAndLoadFile** funcionar. Ela permite acesso ao iframe do Google Drive Picker, que é cross-origin e inacessível a bookmarklets por conta das restrições de segurança do navegador.

Para instalar:

1. Acesse `chrome://extensions` no Chrome.
2. Ative o **Modo do desenvolvedor** (canto superior direito).
3. Clique em **Carregar sem compactação** e selecione a pasta `chrome-extension/` deste repositório.
