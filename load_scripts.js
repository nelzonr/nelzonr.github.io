(function(action) {
    if (typeof window.loadTerritoriosFiles !== 'function') {
        window.loadTerritoriosFiles = (action) => {
            if (loadTerritoriosFiles._loaded) {
                return loadTerritoriosFiles[action]();
            }

            const style = 'https://nelzonr.github.io/territorios.css';
            const script = 'https://nelzonr.github.io/territorios.js';

            const $style = document.createElement('link');
            $style.href = style;
            $style.rel = 'stylesheet';
            $style.crossorigin = 'anonymous';
            document.head.appendChild($style);


            const $script = document.createElement('script');
            $script.src = script;
            $script.crossorigin = 'anonymous';
            $script.onload = function() {
                console.log('script Maps loaded');
                loadTerritoriosFiles._loaded = true;
                loadTerritoriosFiles.mapas = false;
                loadTerritoriosFiles.Maps = () => {
                    if (!loadTerritoriosFiles.mapas) {
                        loadTerritoriosFiles.mapas = new Maps();
                    }
                    return loadTerritoriosFiles.mapas;
                };
                loadTerritoriosFiles.__FOO__ = () => {
                    console.warn('No action provided');
                };
                loadTerritoriosFiles.frame = () => {
                    Maps.frame();
                };
                loadTerritoriosFiles.generateMAP = () => {
                    loadTerritoriosFiles.Maps().generateMAP();
                };
                loadTerritoriosFiles.generatePDF = () => {
                    loadTerritoriosFiles.Maps().generatePDF();
                };
                loadTerritoriosFiles(action);
            };
            $script.onerror = function() {
                console.error('Error loading script');
            }
            document.body.appendChild($script);
        }
    }
    loadTerritoriosFiles(action);
})('__FOO__');