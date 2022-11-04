//código do carro

//criando listas e indices
//exemplo: let NOME_DA_LISTA = [VALOR_ÍNDICE_0, VALOR_ÍNDICE_1, VALOR_ÍNDICE_2];
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [45, 102, 153, 210, 265, 318];
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
  //imagemCarros.length verifica a quantidade de indices na lista indicada (imagemCarros)
  for(let i=0; i<imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for(let i=0; i<imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro(){
  for(let i=0; i<imagemCarros.length; i++){
    if(passouTodaATela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

function passouTodaATela(xCarros){
  return xCarros < -50;
}