'use strict;' //modo restrito

// consumo de api viacep
// viacep.com.br

const limparFormulario = (endereco) =>{
    document.getElementById('cep').value ='';
    document.getElementById('rua').value ='';
    document.getElementById('bairro').value ='';
    document.getElementById('cidade').value ='';
    document.getElementById('estado').value ='';
}

// função para preencher o formulario
const preencherFormulario = (endereco) =>{
    document.getElementById('rua').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.estado;
}

// verifica se o cep é valido
// confere se o cep tem o tamanho correto
const eNumero = (numero) => /^[0-9]+$/.test(numero);

const cepValido = (cep) => cep.length == 8 && eNumero(cep);

// Consumo de api via cep
const pesquisarCep = async() => {
    limparFormulario();
    const url = `https://viacep.com.br/ws/${cep.value}/json/` 

    if(cepValido(cep.value)){
        const dados = await fetch(url);
        const addres = await dados.json();
        
        if(addres.hasOwnProperty('erro')){
            alert('CEP não encontrado');
        }else{
            preencherFormulario(addres);
        }
    }else{
        alert('CEP incorreto');
    }
}

document.getElementById('cep').addEventListener('focusout', pesquisarCep);


