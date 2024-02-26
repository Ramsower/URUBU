// Captura o elemento da imagem
var imagem = document.getElementById("container");

// Adiciona um evento de clique à imagem
imagem.addEventListener("click", function() {
    // Captura o elemento de áudio
    var audio = document.getElementById("audio");

    // Verifica se o áudio está pausado
    if (audio.paused) {
        // Se estiver pausado, inicia a reprodução
        audio.play();
    } else {
        // Caso contrário, pausa a reprodução
        audio.pause();
    }
});
