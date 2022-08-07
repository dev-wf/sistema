function typeEscrita(elemento) {
    var textArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textArray.forEach((letra, i) => {
        setTimeout(() =>
            elemento.innerHTML += letra, 50 * i)
    });

}
var anime = document.querySelector("p");
typeEscrita(anime);

