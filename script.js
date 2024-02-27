const btnBuscar = document.querySelector(".buscar");

btnBuscar.addEventListener("click", continuarBusca);

function continuarBusca() {
    const cliqueBotao = prompt("Com base nas dicas da carta, em qual estado começa nossa busca?");

    if (cliqueBotao === null) {
        return;
    }

    const respostaNormalizada = cliqueBotao.toLowerCase();

    if (respostaNormalizada.includes("pernambuco")) {
        mensagemPernambuco();
    } else {
        alert("Infelizmente não era essa cidade. Ouvi dizer que a Sofia tomou uma água de coco com Alceu Valença agora!");
    }
}

function mensagemPernambuco() {
    const pernambuco = prompt("Cheguei no Pernambuco e encontrei um cartão postal de um monumento .... EU não faço ideia do que isso significa. Você sabe que estado é este?");

    if (pernambuco === null) {
        return;
    }

    const respostaNormalizada = pernambuco.toLowerCase();

    if (respostaNormalizada.includes("tocantins")) {
        mensagemTocantins();
    } else {
        alert("Infelizmente não era esse estado. Ouvi dizer pipipopo");
    }
}

function mensagemTocantins() {
    const tocantins = prompt("Cheguei no Tocantins e encontrei uma mala deixada aqui. Esta mala tinha um chaveiro de ... isso significa alguma coisa para você?");

    if (tocantins === null) {
        return;
    }

    const respostaNormalizada = tocantins.toLowerCase();

    if (respostaNormalizada.includes("acre")) {
        mensagemAcre();
    } else {
        alert("Infelizmente não era esse estado. Ouvi dizer pipipopo");
    }
}

function mensagemAcre() {
    alert("Finalmente achei a cidade perdida! pipipopo");
}