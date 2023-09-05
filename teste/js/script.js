// ids: linha1 a 10 :: lblID1 a 10 :: lblDesc1 a 10 :: lblQuant1 a 10 :: lblUnit1 a 10 :: lblTot1 a 10

function name() {


    // linha1
    id_1 = document.getElementById("lblID1");
    desc_1 = document.getElementById("lblDesc1");
    quant_1 = document.getElementById("lblQuant1");
    unit_1 = document.getElementById("lblUnit1");
    tot_1 = document.getElementById("lblTot1");

    //linha2
    id_2 = document.getElementById("lblID2");
    desc_2 = document.getElementById("lblDesc2");
    quant_2 = document.getElementById("lblQuant2");
    unit_2 = document.getElementById("lblUnit2");
    tot_2 = document.getElementById("lblTot2");

    //linha3
    id_3 = document.getElementById("lblID3");
    desc_3 = document.getElementById("lblDesc3");
    quant_3 = document.getElementById("lblQuant3");
    unit_3 = document.getElementById("lblUnit3");
    tot_3 = document.getElementById("lblTot3");

    //linha4
    id_4 = document.getElementById("lblID4");
    desc_4 = document.getElementById("lblDesc4");
    quant_4 = document.getElementById("lblQuant4");
    unit_4 = document.getElementById("lblUnit4");
    tot_4 = document.getElementById("lblTot4");

    //linha5
    id_5 = document.getElementById("lblID5");
    desc_5 = document.getElementById("lblDesc5");
    quant_5 = document.getElementById("lblQuant5");
    unit_5 = document.getElementById("lblUnit5");
    tot_5 = document.getElementById("lblTot5");

    //linha6
    id_6 = document.getElementById("lblID6");
    desc_6 = document.getElementById("lblDesc6");
    quant_6 = document.getElementById("lblQuant6");
    unit_6 = document.getElementById("lblUnit6");
    tot_6 = document.getElementById("lblTot6");

    //linha7
    id_7 = document.getElementById("lblID7");
    desc_7 = document.getElementById("lblDesc7");
    quant_7 = document.getElementById("lblQuant7");
    unit_7 = document.getElementById("lblUnit7");
    tot_7 = document.getElementById("lblTot7");

    //linha8
    id_8 = document.getElementById("lblID8");
    desc_8 = document.getElementById("lblDesc8");
    quant_8 = document.getElementById("lblQuant8");
    unit_8 = document.getElementById("lblUnit8");
    tot_8 = document.getElementById("lblTot8");

    //linha9
    id_9 = document.getElementById("lblID9");
    desc_9 = document.getElementById("lblDesc9");
    quant_9 = document.getElementById("lblQuant9");
    unit_9 = document.getElementById("lblUnit9");
    tot_9 = document.getElementById("lblTot9");

    //linha10
    id_10 = document.getElementById("lblID10");
    desc_10 = document.getElementById("lblDesc10");
    quant_10 = document.getElementById("lblQuant10");
    unit_10 = document.getElementById("lblUnit10");
    tot_10 = document.getElementById("lblTot10");

    res = document.getElementById("resultado");




    function setID() {
        if (tot_1.value == 0) {
            $(tot_1).css('color', 'transparent');
        } else {
            $(tot_1).css('color', 'black');
        };

        if (tot_2.value == 0) {
            $(tot_2).css('color', 'transparent');
        } else {
            $(tot_2).css('color', 'black');
        };

        if (tot_3.value == 0) {
            $(tot_3).css('color', 'transparent');
        } else {
            $(tot_3).css('color', 'black');
        };

        if (tot_4.value == 0) {
            $(tot_4).css('color', 'transparent');
        } else {
            $(tot_4).css('color', 'black');
        };

        if (tot_5.value == 0) {
            $(tot_5).css('color', 'transparent');
        } else {
            $(tot_5).css('color', 'black');
        };

        if (tot_6.value == 0) {
            $(tot_6).css('color', 'transparent');
        } else {
            $(tot_6).css('color', 'black');
        };

        if (tot_7.value == 0) {
            $(tot_7).css('color', 'transparent');
        } else {
            $(tot_7).css('color', 'black');
        };

        if (tot_8.value == 0) {
            $(tot_8).css('color', 'transparent');
        } else {
            $(tot_8).css('color', 'black');
        };

        if (tot_9.value == 0) {
            $(tot_9).css('color', 'transparent');
        } else {

            $(tot_9).css('color', 'black');
        };

        if (tot_10.value == 0) {
            $(tot_10).css('color', 'transparent');
        } else {

            $(tot_10).css('color', 'black');
        };
    }
    setID()

    // LOGICAS DOS INPUTS:

    $("#lblUnit1").keyup(function (e) {

        var x = quant_1.value;
        $('#lblUnit1').priceFormat({
            prefix: 'R$ ',
            centsSeparator: ',',
            thousandsSeparator: '.',
            clearOnEmpty: true
        });
        var yu = $('#lblUnit1').unmask();
        console.log(yu);

        var z = x * yu;
        $("#lblTot1").val(z).priceFormat({
            prefix: 'R$ ',
            centsSeparator: ',',
            thousandsSeparator: '.',
            clearOnEmpty: true
        });



    });

    $("#lblUnit2").keyup(function (e) {

        var x = quant_2.value;
        $('#lblUnit2').priceFormat({
            prefix: 'R$ ',
            centsSeparator: ',',
            thousandsSeparator: '.',
            clearOnEmpty: true
        });
        var yu = $('#lblUnit2').unmask();
        console.log(yu);

        var z = x * yu;
        $("#lblTot2").val(z).priceFormat({
            prefix: 'R$ ',
            centsSeparator: ',',
            thousandsSeparator: '.',
            clearOnEmpty: true
        });


    });

    $("#lblUnit3").keyup(function (e) {

        var x = quant_3.value;
        $('#lblUnit3').priceFormat({
            prefix: 'R$ ',
            centsSeparator: ',',
            thousandsSeparator: '.',
            clearOnEmpty: true
        });
        var yu = $('#lblUnit3').unmask();
        console.log(yu);

        var z = x * yu;
        $("#lblTot3").val(z).priceFormat({
            prefix: 'R$ ',
            centsSeparator: ',',
            thousandsSeparator: '.',
            clearOnEmpty: true
        });

    });

    $("#lblUnit4").keyup(function (e) {

        var x = quant_4.value;
        $('#lblUnit4').priceFormat({
            prefix: 'R$ ',
            centsSeparator: ',',
            thousandsSeparator: '.',
            clearOnEmpty: true
        });
        var yu = $('#lblUnit4').unmask();
        console.log(yu);

        var z = x * yu;
        $("#lblTot4").val(z).priceFormat({
            prefix: 'R$ ',
            centsSeparator: ',',
            thousandsSeparator: '.',
            clearOnEmpty: true
        });

    });

    $("#lblUnit5").keyup(function (e) {

        var x = quant_5.value;
        $('#lblUnit5').priceFormat({
            prefix: 'R$ ',
            centsSeparator: ',',
            thousandsSeparator: '.',
            clearOnEmpty: true
        });
        var yu = $('#lblUnit5').unmask();
        console.log(yu);

        var z = x * yu;
        $("#lblTot5").val(z).priceFormat({
            prefix: 'R$ ',
            centsSeparator: ',',
            thousandsSeparator: '.',
            clearOnEmpty: true
        });

    });

    $("#lblUnit6").keyup(function (e) {

        var x = quant_6.value;
        $('#lblUnit6').priceFormat({
            prefix: 'R$ ',
            centsSeparator: ',',
            thousandsSeparator: '.',
            clearOnEmpty: true
        });
        var yu = $('#lblUnit6').unmask();
        console.log(yu);

        var z = x * yu;
        $("#lblTot6").val(z).priceFormat({
            prefix: 'R$ ',
            centsSeparator: ',',
            thousandsSeparator: '.',
            clearOnEmpty: true
        });

    });

    $("#lblUnit7").keyup(function (e) {

        var x = quant_7.value;
        $('#lblUnit7').priceFormat({
            prefix: 'R$ ',
            centsSeparator: ',',
            thousandsSeparator: '.',
            clearOnEmpty: true
        });
        var yu = $('#lblUnit7').unmask();
        console.log(yu);

        var z = x * yu;
        $("#lblTot7").val(z).priceFormat({
            prefix: 'R$ ',
            centsSeparator: ',',
            thousandsSeparator: '.',
            clearOnEmpty: true
        });

    });

    $("#lblUnit8").keyup(function (e) {

        var x = quant_8.value;
        $('#lblUnit8').priceFormat({
            prefix: 'R$ ',
            centsSeparator: ',',
            thousandsSeparator: '.',
            clearOnEmpty: true
        });
        var yu = $('#lblUnit8').unmask();
        console.log(yu);

        var z = x * yu;
        $("#lblTot8").val(z).priceFormat({
            prefix: 'R$ ',
            centsSeparator: ',',
            thousandsSeparator: '.',
            clearOnEmpty: true
        });

    });

    $("#lblUnit9").keyup(function (e) {

        var x = quant_9.value;
        $('#lblUnit9').priceFormat({
            prefix: 'R$ ',
            centsSeparator: ',',
            thousandsSeparator: '.',
            clearOnEmpty: true
        });
        var yu = $('#lblUnit9').unmask();
        console.log(yu);

        var z = x * yu;
        $("#lblTot9").val(z).priceFormat({
            prefix: 'R$ ',
            centsSeparator: ',',
            thousandsSeparator: '.',
            clearOnEmpty: true
        });

    });

    $("#lblUnit10").keyup(function (e) {

        var x = quant_10.value;
        $('#lblUnit10').priceFormat({
            prefix: 'R$ ',
            centsSeparator: ',',
            thousandsSeparator: '.',
            clearOnEmpty: true
        });
        var yu = $('#lblUnit10').unmask();
        console.log(yu);

        var z = x * yu;
        $("#lblTot10").val(z).priceFormat({
            prefix: 'R$ ',
            centsSeparator: ',',
            thousandsSeparator: '.',
            clearOnEmpty: true
        });

    });

    /** COMO USAR A LINHA DE MONEY
    $('#element').keyup(function (e) {
        $('#element').priceFormat({
            prefix: 'R$ ',
            thousandsSeparator: '',
            clearOnEmpty: true
        });
        console.log($('#element').val());
        console.log($('#element').unmask()); remover mascara
    });**/


    function Somar() {
        $("input").keyup(function (e) {
            setID();
            let resultado = parseFloat($(tot_1).unmask()) + parseFloat($(tot_2).unmask()) + parseFloat($(tot_3).unmask()) + parseFloat($(tot_4).unmask()) + parseFloat($(tot_5).unmask());
            $("#resultado").text(resultado);
            $('#resultado').priceFormat({
                prefix: 'R$ ',
                centsSeparator: ',',
                thousandsSeparator: '.',
                clearOnEmpty: true
            });
            sessionStorage.setItem('resultado', $(res).text());
        });
    }
    Somar();

    function setBD() {
        //SET LINHA 1
        sessionStorage.setItem('id_1', id_1.value);
        sessionStorage.setItem('descricao_1', desc_1.value);
        sessionStorage.setItem('quantidade_1', quant_1.value);
        sessionStorage.setItem('unitario_1', unit_1.value);
        sessionStorage.setItem('total_1', tot_1.value);
        //SET LINHA 2
        sessionStorage.setItem('id_2', id_2.value);
        sessionStorage.setItem('descricao_2', desc_2.value);
        sessionStorage.setItem('quantidade_2', quant_2.value);
        sessionStorage.setItem('unitario_2', unit_2.value);
        sessionStorage.setItem('total_2', tot_2.value);
        //SET LINHA 3
        sessionStorage.setItem('id_3', id_3.value);
        sessionStorage.setItem('descricao_3', desc_3.value);
        sessionStorage.setItem('quantidade_3', quant_3.value);
        sessionStorage.setItem('unitario_3', unit_3.value);
        sessionStorage.setItem('total_3', tot_3.value);
        //SET LINHA 4
        sessionStorage.setItem('id_4', id_4.value);
        sessionStorage.setItem('descricao_4', desc_4.value);
        sessionStorage.setItem('quantidade_4', quant_4.value);
        sessionStorage.setItem('unitario_4', unit_4.value);
        sessionStorage.setItem('total_4', tot_4.value);
        //SET LINHA 5
        sessionStorage.setItem('id_5', id_5.value);
        sessionStorage.setItem('descricao_5', desc_5.value);
        sessionStorage.setItem('quantidade_5', quant_5.value);
        sessionStorage.setItem('unitario_5', unit_5.value);
        sessionStorage.setItem('total_5', tot_5.value);
        //SET LINHA 6
        sessionStorage.setItem('id_6', id_6.value);
        sessionStorage.setItem('descricao_6', desc_6.value);
        sessionStorage.setItem('quantidade_6', quant_6.value);
        sessionStorage.setItem('unitario_6', unit_6.value);
        sessionStorage.setItem('total_6', tot_6.value);

        //SET LINHA 7
        sessionStorage.setItem('id_7', id_7.value);
        sessionStorage.setItem('descricao_7', desc_7.value);
        sessionStorage.setItem('quantidade_7', quant_7.value);
        sessionStorage.setItem('unitario_7', unit_7.value);
        sessionStorage.setItem('total_7', tot_7.value);

        //SET LINHA 8
        sessionStorage.setItem('id_8', id_8.value);
        sessionStorage.setItem('descricao_8', desc_8.value);
        sessionStorage.setItem('quantidade_8', quant_8.value);
        sessionStorage.setItem('unitario_8', unit_8.value);
        sessionStorage.setItem('total_8', tot_8.value);

        //SET LINHA 9
        sessionStorage.setItem('id_9', id_9.value);
        sessionStorage.setItem('descricao_9', desc_9.value);
        sessionStorage.setItem('quantidade_9', quant_9.value);
        sessionStorage.setItem('unitario_9', unit_9.value);
        sessionStorage.setItem('total_9', tot_9.value);

        //SET LINHA 10
        sessionStorage.setItem('id_10', id_10.value);
        sessionStorage.setItem('descricao_10', desc_10.value);
        sessionStorage.setItem('quantidade_10', quant_10.value);
        sessionStorage.setItem('unitario_10', unit_10.value);
        sessionStorage.setItem('total_10', tot_10.value);


    }

    /*
    function lblData() {
        date = new Date();
        const options = {
            year: "numeric",
            month: "numeric",
            day: "numeric" - 1,
        }
        var hoje = date.toLocaleDateString("pt-br", options);
        console.log(hoje);
        document.getElementById("lbldata").value = moment().format('MMMM Do YYYY, h:mm:ss a');
    
    
    
    }
    */
    setBD();
    function Data() {

        const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
        }

        $('#lbldata').val(new Date().toISOString().slice(0, 10));
        //$('#lbldata').val(new Date().toISOString().slice(0, 10));

    }
    $(document).ready(function () {
        Data();
    });


    $("#btnPrint").click(function (e) {
        e.preventDefault();
        console.log('Imprimindo.. ');
        print();
    });

}

