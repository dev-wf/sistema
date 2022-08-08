// MASCARA CPF E CNPJ
$(document).on('keydown', '[data-mask-for-cpf-cnpj]', function (e) {

    var digit = e.key.replace(/\D/g, '');

    var value = $(this).val().replace(/\D/g, '');

    var size = value.concat(digit).length;

    $(this).mask((size <= 11) ? '000.000.000-00' : '00.000.000/0000-00');


});

//MASCARA DINHEIRO:
$("#valProduto").maskMoney();

//DATA ATUAL
const date = new Date().toLocaleDateString();
// BOTAO EMITIR NOTA:
$('#emitirNota').click(() => {
    let data = $('#data').val().split('-').reverse().join('/');
    if (data == '') {
        console.log(date);
    } else {
        data
    }


    let nome = $('#clinome').val();
    let cliDoc = $('#clidoc').val();

    let produto = $('#produto').val();
    let valProduto = $('#valProduto').val();

    let eminome = $('#eminome').val();
    let emiDoc = $('#emidoc').val();
    if (eminome == '' && emiDoc == '') {
        eminome = "WF TECH-Developer";
        emiDoc = "43.652.172/0001-52";
    } else {
        eminome;
        emiDoc
    }

    console.log(data);
    console.log(nome);
    console.log(cliDoc);
    console.log(produto);
    console.log(valProduto);
    console.log(eminome);
    console.log(emiDoc);

})

