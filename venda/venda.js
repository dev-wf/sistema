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
    $("#uni1").maskMoney({ thousands: '.', decimal: ',' });
});

$("#tot1").keyup(function (e) {
    //window.alert($("#uni1").val());
    $("#tot1").maskMoney({ thousands: '.', decimal: ',' });
});
