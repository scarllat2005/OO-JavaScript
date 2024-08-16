const livros = require('./listaLivros');

function insertionSort (lista){
    for(let atual = 0; atual < lista.length; atual++){
        let analise = atual;
        while(analise > 0 && lista[analise] < lista[analise - 1].preco){
            troca(lista,analise)
            analise--
        }
    }
    console.log(livros);
}

insertionSort(livros);
