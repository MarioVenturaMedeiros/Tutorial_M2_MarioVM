function escolhe() {
    var jogador = parseInt($("#jogador").val())
    var numero = $("#numero").val()

    var json = {
        "jogador": jogador,
        "numero": numero
    }
    $.post("/novodado", json, function (resultado) {
        if (resultado == "Escolha feita") {
            window.location.href = "/salva.html";
        }
    })
}

function adivinha() {
    var numero = $("#numero").val()

    var json = {
        "numero": numero
    }

    $.post("/confere", json, function (resultado) {
        if (resultado == "ERROU") {
            window.location.href = "/erro.html";
        } else if (resultado == "ACERTOU, MIZERAVI") {
            window.location.href = "/acerto.html"
        }
    })
}
