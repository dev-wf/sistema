
$('#emitirNota').click(() => {
    let data = $('#data').val();

    let nome = $('#clinome').val();
    let cliDoc = $('#clidoc').val();

    let produto = $('#produto').val();
    let valProduto = $('#valProduto').val();

    let eminome = $('#eminome').val();
    let emiDoc = $('#emidoc').val();

    valProduto = parseInt(valProduto);

    console.log(data);
    console.log(nome);
    console.log(cliDoc);
    console.log(produto);
    console.log(valProduto);
    console.log(eminome);
    console.log(emiDoc);



})