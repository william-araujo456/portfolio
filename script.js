/* Ano do rodapé */
document.getElementById('ano').textContent = new Date().getFullYear();

/* Tema claro e escuro */
(function () {
    var raiz = document.documentElement;
    var botao = document.getElementById('alternar-tema');
    var metaTema = document.getElementById('meta-tema');
    var cores = { light: '#0a4dd7', dark: '#0a3a9e' };

    function aplicar(tema) {
        raiz.setAttribute('data-theme', tema);
        botao.setAttribute('aria-pressed', tema === 'dark' ? 'true' : 'false');
        metaTema.setAttribute('content', cores[tema]);
    }

    function salvo() {
        try { return localStorage.getItem('tema'); } catch (e) { return null; }
    }

    aplicar(raiz.getAttribute('data-theme'));

    botao.addEventListener('click', function () {
        var novo = raiz.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        aplicar(novo);
        try { localStorage.setItem('tema', novo); } catch (e) {}
    });

    /* Sem escolha salva, acompanha o tema do sistema */
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
        if (!salvo()) aplicar(e.matches ? 'dark' : 'light');
    });
})();