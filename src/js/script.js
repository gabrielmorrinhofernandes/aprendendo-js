let rng;
let playerChoice, botChoice;
let nome;
let menu;
let scorePlayer = 0
let scoreBot = 0
const botaoPedra = document.getElementById('button_pedra');
const botaoPapel = document.getElementById('button_papel');
const botaoTesoura = document.getElementById('button_tesoura');
const botaoPedra_bot = document.getElementById('button_pedraBot');
const botaoPapel_bot = document.getElementById('button_papelBot');
const botaoTesoura_bot = document.getElementById('button_tesouraBot');
const jogar = document.getElementById('button_jogar')
function limparSelecao() {
    botaoPedra.classList.remove('RPS_botaoSelecionado');
    botaoPapel.classList.remove('RPS_botaoSelecionado');
    botaoTesoura.classList.remove('RPS_botaoSelecionado');
}
function limparSelecao_bot() {
    botaoPedra_bot.classList.remove('RPS_botaoSelecionado_bot');
    botaoPapel_bot.classList.remove('RPS_botaoSelecionado_bot');
    botaoTesoura_bot.classList.remove('RPS_botaoSelecionado_bot');
}
function jogarPedra(){
    playerChoice = 'pedra';
    limparSelecao()
    botaoPedra.classList.add('RPS_botaoSelecionado');
}
function jogarPapel(){
    playerChoice = 'papel';
    limparSelecao()
    botaoPapel.classList.add('RPS_botaoSelecionado');
}
function jogarTesoura(){
    playerChoice = 'tesoura';
    limparSelecao()
    botaoTesoura.classList.add('RPS_botaoSelecionado');
}
jogar.addEventListener('click', Jogar);
botaoPedra.addEventListener('click', jogarPedra);
botaoPapel.addEventListener('click', jogarPapel);
botaoTesoura.addEventListener('click', jogarTesoura);
function Jogar(){
    rng = Math.floor(Math.random()*3);
    if(rng === 0){
        botChoice = 'pedra';
        limparSelecao_bot()
        botaoPedra_bot.classList.add('RPS_botaoSelecionado_bot');
    }
    else if(rng === 1){
        botChoice = 'papel';
        limparSelecao_bot()
        botaoPapel_bot.classList.add('RPS_botaoSelecionado_bot');
    }
    else{
        botChoice = 'tesoura';
        limparSelecao_bot()
        botaoTesoura_bot.classList.add('RPS_botaoSelecionado_bot');
    }
    if(playerChoice === 'pedra' && botChoice === 'tesoura' || playerChoice === 'papel' && botChoice === 'pedra' || playerChoice === 'tesoura' && botChoice === 'papel'){
        document.getElementById('Resultado').innerHTML = "ganhou, " + playerChoice + " ganhou de " + botChoice;
        scorePlayer++;
        document.getElementById('scorePlayer').innerHTML = scorePlayer;


    }
    else if(playerChoice === 'pedra' && botChoice === 'pedra' || playerChoice === 'papel' && botChoice === 'papel' || playerChoice === 'tesoura' && botChoice === 'tesoura'){
        document.getElementById('Resultado').innerHTML = "empate, " + playerChoice + " e " + botChoice + " são iguais";
    }
    else if(playerChoice !== 'pedra' && playerChoice !== 'papel' && playerChoice !== 'tesoura'){
        document.getElementById('Resultado').innerHTML = "erro, escolha esperada";
    }
    else{
        document.getElementById('Resultado').innerHTML = "perdeu, " + botChoice + " ganhou de " + playerChoice;
        scoreBot++;
        document.getElementById('scoreBot').innerHTML = scoreBot;
    }
}