function tocaSom (idElemetoAudio) {
    
    document.querySelector(idElemetoAudio).play();
}

const listaDeTesclas = document.querySelectorAll('.tecla');


//enquanto
for  (let contador = 0; contador < listaDeTesclas.length;contador++) {

    const tecla = listaDeTesclas[contador]
    const instrumento = tecla.classList[1];

    //templade string
    const IdAudio = `#som_${instrumento}`

    //console.log(IdAudio);

    //"#som_(instrumento)"
    tecla.onclick = function () {
        tocaSom(IdAudio)
    }
    
    //console.log(contador);

}
