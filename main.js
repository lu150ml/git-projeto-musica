function tocaSomPom () {
    
    document.querySelector('#som_tecla_pom').play();
}

const listaDeTesclas = document.querySelectorAll('.tecla');

listaDeTesclas[0].onclick = tocaSomPom;
