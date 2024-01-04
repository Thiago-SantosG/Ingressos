function comprar(){
    let Tipo = document.getElementById('tipo-ingresso');
    let Qtd = document.getElementById('qtd').value;

    if(Tipo.value == 'pista'){
        comprarPista(Qtd);
    }else if (Tipo.value == 'superior'){
        comprarSuperior(Qtd);
    } else {
        comprarInferior(Qtd);
    }
}
   
function comprarPista(Qtd){
    let QtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (Qtd > QtdPista) {
        alert('Quantidade indisponivel para Pista!');
    }else {
        QtdPista = QtdPista - Qtd;
        document.getElementById('qtd-pista').textContent = QtdPista;
        alert('Compra realizada com secesso!');
    }
}

function comprarSuperior(Qtd){
    let QtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if(Qtd > QtdSuperior){
        alert('Quantidade indisponivel para superior!')
    }else {
        QtdSuperior = QtdSuperior - Qtd;
        document.getElementById('qtd-superior').textContent = QtdSuperior;
        alert('Compra realizada com sucesso!')
    }
}

function comprarInferior(Qtd){
    let QtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if(Qtd > QtdInferior){
        alert('Quantidade indisponivel para superior!')
    }else {
        QtdInferior = QtdInferior - Qtd;
        document.getElementById('qtd-inferior').textContent = QtdInferior;
        alert('Compra realizada com sucesso!')
    }
}


