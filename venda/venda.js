console.log('venda.js');

function log() {
    console.log($("#quantidadeUm").val());
    console.log($("#quantidadeDois").val());
    console.log($("#quantidadeTres").val());
    console.log($("#quantidadeQuatro").val());
    console.log($("#quantidadeCinco").val());
    console.log();
    console.log($("#selectUm").val());
    console.log($("#selectDois").val());
    console.log($("#selectTres").val());
    console.log($("#selectQuatro").val());
    console.log($("#selectCinco").val());
    console.log();
    console.log($("#descricaoUm").val());
    console.log($("#descricaoDois").val());
    console.log($("#descricaoTres").val());
    console.log($("#descricaoQuatro").val());
    console.log($("#descricaoCinco").val());
    console.log();
    console.log($("#unitarioUm").val());
    console.log($("#unitarioDois").val());
    console.log($("#unitarioTres").val());
    console.log($("#unitarioQuatro").val());
    console.log($("#unitarioCinco").val());
    console.log();
    console.log($("#totalUm").val());
    console.log($("#totalDois").val());
    console.log($("#totalTres").val());
    console.log($("#totalQuatro").val());
    console.log($("#totalCinco").val());


}

var bd = localStorage.setItem('database', JSON.stringify({
    quantidadeUm: $("#quantidadeUm").val()
}));

$("input").keyup(function (e) {
    var multiUm = $("#quantidadeUm").val() * $("#unitarioUm").val();
    $("#totalUm").val(multiUm);

    var multiDois = $("#quantidadeDois").val() * $("#unitarioDois").val();
    $("#totalDois").val(multiDois);

    var multiTres = $("#quantidadeTres").val() * $("#unitarioTres").val();
    $("#totalTres").val(multiTres);

    var multiQuatro = $("#quantidadeQuatro").val() * $("#unitarioQuatro").val();
    $("#totalQuatro").val(multiQuatro);

    var multiCinco = $("#quantidadeCinco").val() * $("#unitarioCinco").val();
    $("#totalCinco").val(multiCinco);

    var SomaTotal = $("#totalUm").val() + $("#totalDois").val() + $("#totalTres").val() + $("#totalQuatro").val() + $("#totalCinco").val();
    console.log(parseInt(SomaTotal));
    $("#SomaTotal").text(parseFloat(SomaTotal));
});

$("#imprimir").click(function (e) {
    console.log(bd);
    e.preventDefault();

});
