console.log('venda.js');

/*var bd = localStorage.setItem('database', JSON.stringify({
    quantidadeUm: $("#quantidadeUm").val()


    oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
            type="number" maxlength="2" 

})); */


function numberIs(a) {
    a.value = a.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
}


(function () {
    console.log('multi funcionando.');
    // quant1 pro1 uni1 tot1 
    
    $("#uni1").keyup(function (e) {
        var a = $("#quant1").val();
        var b = $("#uni1").val();
        n1 = parseFloat(a);
        n2 = parseFloat(b.replace(",", "."));
        var resultado = n1 * n2;
        var convert = resultado;
        $("#tot1").val(convert);
        console.log($("#tot1"));

    });


    $("#print").click(function (e) {
        $("#print").hide();
        $(".inputBorder").css("border", "none");
        print();
        e.preventDefault();
    });

})();