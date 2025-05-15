var styles = ['https://nelzonr.github.io/public/territorios.css'];
var scripts = ['https://nelzonr.github.io/public/replace_icons.js'];

var $body = document.getElementsByTagName('body')[0];

function appendStyle(link) {
    var $link = document.createElement('link');
    $link.href = link;
    $link.rel = 'stylesheet';
    //$link.crossorigin = 'anonymous';
    $body.append($link)
}

function appendScript(link) {
    var $script = document.createElement('script');
    $script.src = link;
    //$script.crossorigin = 'anonymous';
    $body.append($script)
}

function loadExternalFiles() {
    styles.map(link => appendStyle(link));
    scripts.map(script => appendScript(script));
}
loadExternalFiles();