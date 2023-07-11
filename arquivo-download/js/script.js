const botao = document.getElementById('botao');

botao.addEventListener('click', procurarCep);

function procurarCep() {

    const input = document.getElementById('input').value;

    resultadoCep(input);

}

async function resultadoCep(input) {

    const dados = await fetch(`https://viacep.com.br/ws/${input}/json/`).then((resposta) => resposta.json());

    document.getElementById('cidade').value = dados.localidade;
    document.getElementById('bairro').value = dados.bairro;

}