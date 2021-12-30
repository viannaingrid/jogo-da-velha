
var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById(getElementById = 'Jogador-selecionado');
var vencedorSelecionado = document.getElementById(getElementById = 'vencedor-selecionado');
var quadrado = document.getElementsByClassName(getElementsByClassName = 'quadrado');

mudarJogador(valor = 'X');

function escolherQuadrado (id) {

    var quadrado = document.getElementById(id)
    if(quadrado.innerHTML !== '-') {
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';

    if(jogador === 'X') {
        jogador = 'O';
    } else {
        jogador = 'X';
    }

    mudarJogador(jogador);
    checaVencedor();
}

function mudarJogador (valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;

}

function checaVencedor() {
    var quadrado1 = document.getElementsById(getElementById = '1');
    var quadrado2 = document.getElementsById(getElementById = '2');
    var quadrado3 = document.getElementsById(getElementById = '3');
    var quadrado4 = document.getElementsById(getElementById = '4');
    var quadrado5 = document.getElementsById(getElementById = '5');
    var quadrado6 = document.getElementsById(getElementById = '6');
    var quadrado7 = document.getElementsById(getElementById = '7');
    var quadrado8 = document.getElementsById(getElementById = '8');
    var quadrado9 = document.getElementsById(getElementById = '9');

    if(checaSequencia(quadrado1, quadrado2, quadrado3)) {
        mudaCorQuadrado(quadrado1, quadrado2, quadrado3);
        MudarVencedor(quadrado1);
        return;
    }

    if(checaSequencia(quadrado4, quadrado5, quadrado6)) {
        mudaCorQuadrado(quadrado4, quadrado5, quadrado6);
        MudarVencedor(quadrado4);
        return;
    }

    if(checaSequencia(quadrado7, quadrado8, quadrado9)) {
        mudaCorQuadrado(quadrado7, quadrado8, quadrado9);
        MudarVencedor(quadrado7);
        return;
    }
    
    if(checaSequencia(quadrado1, quadrado4, quadrado7)) {
        mudaCorQuadrado(quadrado1, quadrado4, quadrado7);
        MudarVencedor(quadrado1);
        return;
    }
}

function MudarVencedor(quadrado){
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}


function mudaCorQuadrado (quadrado1, quadrado2, quadrado3) {
    quadrado.style.background = '#0f0';
    quadrado.style.background = '#0f0';
    quadrado.style.background = '#0f0';
}


function checaSequencia (quadrado1, quadrado2, quadrado3) {
    var acerto = false;

    if( quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        acerto = true;
    }
     return acerto;
}