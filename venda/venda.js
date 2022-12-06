console.log('venda.js');

/*var bd = localStorage.setItem('database', JSON.stringify({
    quantidadeUm: $("#quantidadeUm").val()


    oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
            type="number" maxlength="2" 

})); */

function numberIs(a) {
    a.value = a.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
}


$("#uni1").keyup(function (e) {
    //window.alert($("#uni1").val());
    // $("#uni1").maskMoney({ thousands: '.', decimal: ',' });
});

//Instanciando o objeto
var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
});

function multi() {
    console.log('multi funcionando.');
    // quant1 pro1 uni1 tot1 
    $("#quant1").keyup(function (e) {
        console.log($("#quant1").val());
    });

    $("#pro1").keyup(function (e) {
        console.log($("#pro1").val());
    });

    $("#uni1").keyup(function (e) {
        var a = $("#quant1").val();
        var b = $("#uni1").val();
        console.log('somou');
        n1 = parseFloat(a);
        n2 = parseFloat(b.replace(",", "."));
        var resultado = n1 * n2;
        console.log(resultado);
        $("#tot1").val(resultado);

    });



}

