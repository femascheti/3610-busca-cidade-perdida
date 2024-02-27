const btnBuscar = document.querySelector(".buscar");

btnBuscar.addEventListener("click", continuarBusca);

function continuarBusca() {
    const estado = prompt("Com base nas dicas da carta, em qual estado começa nossa busca?");

    if (estado === null) {
        return;
    }

    const respostaNormalizada = estado.toLowerCase();

    if (respostaNormalizada.includes("pernambuco")) {
        mensagemPernambuco();
    } else if (respostaNormalizada.includes("tocantins")) {
        mensagemTocantins();
    } else if (respostaNormalizada.includes("acre")) {
        mensagemAcre();
    } else {
        alert("Parece que estamos no caminho errado. As pistas não apontam para este estado. Vamos tentar novamente.");
    }
}

function mensagemPernambuco() {
    alert("Você descobriu a pista escondida em Pernambuco! Agora, precisamos seguir um estado pipipopo");
}

function mensagemTocantins() {
    alert("Incrível! Lá no Tocantins encontramos um chaveiro de pipipopo");
}

function mensagemAcre() {
    alert("Finalmente, após uma longa jornada através de Pernambuco, Tocantins e Acre, encontramos a cidade perdida! Sua ajuda foi essencial para desvendar esse mistério. Obrigado!")
}
