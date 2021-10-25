/* /* var lista = ['maçã', 'Uva', 'Laranja'];

lista.push('Pêra');

console.log(lista);

var frutas = [{nome:'maçã', cor:'Vermelha'}, {nome:'Uva', cor:'Roxa'}];
console.log(frutas[1].nome);

function soma (n1, n2) {
    return n1 + n2;
}

function validaIdade(idade) {
    var validar;
    if(idade >= 18) {
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade));

/* alert(soma(5, 10)); */

function botao() {
    document.getElementById('agradecimento').innerHTML = 'Obrigado por clicar!';
}

function botao2() {
    window.open('https://www.google.com');
    window.location.href = 'https://www.google.com';
}

function trocar(elemento) {
    /* document.getElementById('mouse').innerHTML = 'Obrigado por passar o mouse!'; */
    elemento.innerHTML = 'Obrigado por passar o mouse!' 
}

function voltar(elemento) {
    /* document.getElementById('mouse').innerHTML = 'Passe o mouse aqui!'; */
    elemento.innerHTML = 'Passe o mouse aqui!'
}

function load() {
    alert('Pagina carregada!')
}  

function funcaoChange(elemento) {
    console.log(elemento.value);
}