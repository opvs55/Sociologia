$(document).ready(function () {
    // Inicialmente, oculta todos os conteúdos
    $("#content-organic").hide();
    $("#content-mecanic").show();

    // Adiciona manipuladores de eventos para os links do navbar
    $("#mecanic").click(function () {
        // Oculta todos os conteúdos e, em seguida, exibe o desejado
        $("#content-organic").hide();
        $("#content-mecanic").show();
    });

    $("#organic").click(function () {
        // Oculta todos os conteúdos e, em seguida, exibe o desejado
        $("#content-mecanic").hide();
        $("#content-organic").show();
    });
});