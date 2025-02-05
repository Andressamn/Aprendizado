alert('Boas vindas ao jogo do número secreto');
let NumeroSecreto = 4;
console.log(NumeroSecreto)
let chute 
let tentativas = 1

//enquanto chute não for igual ao n.s;
while(chute != NumeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');
}

//Se chute for igual ao número secreto;
{if (chute == NumeroSecreto) {
    break;
} else {
    if (chute > NumeroSecreto) {
    alert(`O número secreto é menor que ${chute}`);
} else{
    alert(`O número secreto é maior que ${chute}`)
}} 
//tentativas = tentativas + 1;
tentativas++;
}
if (tentativas > 1){
alert(`Isso aí, você descobriu o ${NumeroSecreto} com ${tentativas} tentativas`);
} else {
    alert(`Isso aí, você descobriu o ${NumeroSecreto} com ${tentativas} tentativa`);
}