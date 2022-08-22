
function ativar() {
    var botao = document.getElementsByClassName("botao")[0]
    var extra = document.getElementsByClassName("show")[1]
    if (botao.innerText == "Veja mais") {
        extra.classList.remove("sumir")
        botao.innerText = "Veja menos"
    }
    else {
        extra.classList.add("sumir")
        botao.innerText = "Veja mais"
    }
}

function acessar(x) {
    var saida
    switch (x) {
        case 1:
            saida = "https://sandsonsoares.github.io/Point-do-Din/"
            link(saida)
            break;
        case 2:
            saida = "https://sandsonsoares.github.io/Leading-Page/"
            link(saida)
            break
        case 3:
            saida = "https://jornal-de-morabi.netlify.app/index.html"
            link(saida)
            break
        case 4:
            saida = "https://history-quest.netlify.app/"
            link(saida)
            break
        case 5:
            saida = " "
            link(saida)
            break
        case 6:
            saida = " "
            link(saida)
            break
    }
}
function link(url) {
    var win = window.open(url, "_blank")
    win.focus()
}