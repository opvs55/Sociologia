$(document).ready(function () {
    $(".containerContent").hide();

    // Adiciona manipuladores de eventos para os links do navbar
    $("#link-home").click(function () {
        const src = "../pages/home.html"
        $(".containerContent").hide();
        loadContent("#content-home", src);
        $("#content-home").show();
    });

    $("#link-durkheim").click(function () {
        const src = "../pages/durkheim.html"
        $(".containerContent").hide();
        loadContent("#content-durkheim", src);
        $("#content-durkheim").show();
    });

    $("#link-weber").click(function () {
        const src = "../pages/weber.html"
        $(".containerContent").hide();
        loadContent("#content-weber", src);
        $("#content-weber").show();
    });

    // Função para carregar o conteúdo de um arquivo HTML
    function loadContent(page, src) {
        $(`${page}`).load(`${src}`)
    }
});


