
console.log("RECIBO.JS");
// MASCARA CPF E CNPJ
$(document).on('keydown', '[data-mask-for-cpf-cnpj]', function (e) {

    var digit = e.key.replace(/\D/g, '');

    var value = $(this).val().replace(/\D/g, '');

    var size = value.concat(digit).length;

    $(this).mask((size <= 11) ? '000.000.000-00' : '00.000.000/0000-00');


});

//MASCARA DINHEIRO:
$("#valProduto").maskMoney();




