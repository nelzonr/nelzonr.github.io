javascript:(function () {
    window.AG_LANGUAGES = [
        { label: 'PT', locale: 'pt', region: 'r5', lp: 'lp-t' },
        { label: 'ES', locale: 'es', region: 'r4', lp: 'lp-s' },
        { label: 'EN', locale: 'en', region: 'r1', lp: 'lp-e' },
    ];
    // Código inlado para contornar o CSP do JW.org que bloqueia <script src> externo.
    // Fonte: custom_bar.js / custom_bar.min.js
    (function () {
        const customLanguages = window.AG_LANGUAGES ?? null;
        // ... (ver custom_bar.js para o código completo)
        // Para gerar o bookmarklet minificado, execute: npm run minify
        // e use o conteúdo de custom_bar_bookmarklet.min.js
    })();
})();
