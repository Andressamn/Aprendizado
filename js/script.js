document.getElementById('iniciarJogo').addEventListener('click', function() {
alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto chute não for igual ao n.s;
while(chute != numeroSecreto) {
    chute = parseInt(prompt(`Escolha um número entre 1 e ${numeroMaximo}`));

//Se chute for igual ao número secreto;
if (chute == numeroSecreto) {
    break;
} else {
    if (chute > numeroSecreto) {
    alert(`O número secreto é menor que ${chute}`);
} else {
    alert(`O número secreto é maior que ${chute}`);
}} 
//tentativas = tentativas + 1;
tentativas++;
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí, você descobriu o ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
});

//if (tentativas > 1){
//alert(`Isso aí, você descobriu o ${NumeroSecreto} com ${tentativas} tentativas`);
//} else {
 //   alert(`Isso aí, você descobriu o ${NumeroSecreto} com ${tentativas} tentativa`);
//}