console.log("BD.js");

// LOCAL STORAGE SET ITEM: 
function set() {
    /*
    localStorage.setItem("data", data.value);
    localStorage.setItem("valor", valor.value);
    localStorage.setItem("cliente", cliente.value);
    localStorage.setItem("docCliente", docCliente.value);
    localStorage.setItem("descricao", descricao.value);
    localStorage.setItem("emissor", emissor.value);
    localStorage.setItem("docEmissor", docEmissor.value);
    */
    var dados = JSON.stringify({
        data: document.querySelector("input[name=data]").value,
        cliente: document.querySelector("input[name=clinome]").value,
        docCliente: document.querySelector("input[name=clidoc]").value,
        referente: document.querySelector("input[name=produto]").value,
        valor: document.querySelector("input[name=valProduto]").value,
        emissor: document.querySelector("input[name=eminome]").value,
        docEmissor: document.querySelector("input[name=emidoc]").value
    });
    localStorage.setItem("recibodb", JSON.stringify(dados));
};
// verificar se  é mobile ou nao:
function celular() {
    if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
    ) {
        return true; // está utilizando celular
    }
    else {
        return false; // não é celular
    }
}

// LOCAL STORAGE GET ITE M: 
function get() {

    //Pega o registro STORAGE no localstorage.
    var registro = localStorage.getItem("recibodb");
    var parse = JSON.parse(registro);
    var db = JSON.parse(parse);
    console.log(db.data);
    console.log(db.cliente);
    console.log(db.docCliente);
    console.log(db.referente);
    console.log(db.valor);
    console.log(db.emissor);
    console.log(db.docEmissor);
    var date = new Date();
    var hoje = date.toLocaleDateString();
    console.log(hoje);
    if (db.data == "") {
        $("#getData").text(hoje.split('-').reverse().join('/'));
    } else {
        $("#getData").text(db.data.split('-').reverse().join('/'));
    }
    $("#getCli").html(db.cliente);
    $("#getDoC").html(db.docCliente);
    $("#getReferente").html(db.referente);
    $("#getValor").text(db.valor);
    if (db.emissor == "" || db.docEmissor == "") {
        $("#getEmi").html("WF TECH-Developer");
        $("#getDocEmi").html("43.652.172/0001-52");
    } else {
        $("#getEmi").html(db.emissor);
        $("#getDocEmi").html(db.docEmissor);
    }
    if (celular() == false) {
        window.print();
        setTimeout(function () {
            alert('Obrigado por usar nosso sistema! :)');
            window.location.assign('./recibo.html');
        }, 1000);
    }

}
/*$("#emitirNota").click(function (e) {

    set();
   // window.location = "./imprimir.html";
    e.preventDefault();

});*/


const form = document.querySelector("#imprimir");
form.addEventListener("submit", function (e) {
    set();
    window.location = "./imprimir.html";
    e.preventDefault();


});