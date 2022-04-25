var escolha;
var escolha2;
var escolha3;


function layka() {
    alert("Layka vai pra um planeta de gelo, o Midnight-Mistery01, que a muito tempo atrás tinha uma civilização mas que tudo foi tomado por eras de gelo. Acredita-se que o artefato Golden Circle pode estar escondido em alguma parte do gelo. Ao chegar no planeta com sua nave, Layka identifica através de seus equipamentos uma estrutura subterrânea não identificada.");
    escolha = prompt("ESCOLHA 1: Layka decide adentrar a estrutura subterrânea. \nESCOLHA 2: Layka decide seguir sobrevoando o planeta em sua nave.");
    
    while(true){
        if (escolha == "1") {
            alert("Parabéns, você passou para a próxima fase!"); 
        break;     
        } else if (escolha == "2") {
            alert("Seguindo sobrevoando o planeta em sua nave, Layka é surpreendida por uma tempestade de gelo que congela toda a nave em poucos minutos. Layka tenta utilizar de seus recursos para se aquecer, mas em vão, e morre de hipotermia. Tente novamente!"); 
        break;
        } else {
            alert("Escolha INVÁLIDA. Digite 1 ou 2");
            escolha = prompt("ESCOLHA 1: Layka decide adentrar a estrutura subterrânea. \nESCOLHA 2: Layka decide seguir sobrevoando o planeta em sua nave.");
        } 
    }    
}

function layka2(){
    alert("Chegando na estrutura subterrânea, Layka identifica uma caverna que após caminhar por alguns minutos leva a uma bifurcação, na qual ela pode seguir por dois caminhos, o caminho da esquerda e o caminho da direita. Qual caminho Layka deve seguir?");
    escolha2 = prompt("ESCOLHA 1: Layka segue pelo caminho da esquerda. \nESCOLHA 2: Layka segue pelo caminho da direita.");

    while(true){
        if(escolha2 == "2"){
            alert("Parabéns, você passou para a próxima fase!");
        break;
        } else if (escolha2 == "1"){
            alert("Ao seguir pelo caminho da esquerda, Layka segue caminhando e não encontra uma saída da caverna. Após diversas tentativas de voltar a bifurcação, Layka falha e fica perdida, assim morrendo de hipotermia. Tente novamente!");
        break;
        } else {
            alert("Escolha INVÁLIDA. Digite 1 ou 2");
            escolha2 = prompt("ESCOLHA 1: Layka segue pelo caminho da esquerda. \nESCOLHA 2: Layka segue pelo caminho da direita.");
        }
    }
}

function layka3(){
    alert("Após seguir pelo caminho da direita, Layka encontra uma torre enorme e de formato retangular construída a partir do gelo. Layka usa seus equipamentos para escalar até a entrada da torre e se depara com espaço contendo apenas uma mesa e um item sobre ela, o Golden Circle. O que Layka deve fazer?");
    escolha3 = prompt("ESCOLHA 1: Layka deve agir rapidamente e avançar em direção a mesa para coletar o artefato. \nESCOLHA 2: Layka inspeciona o ambiente antes de avançar em direção ao artefato.");

    while(true){
        if(escolha3 == "2"){
            alert("A missão é concluída com sucesso e com a ajuda dos outros exploradores espaciais a construção do estabilizador de núcleo consegue ser concluída com sucesso e a tempo! Foi uma ótima jornada!")
        break;
        } else if (escolha3 == "1"){
            alert("Assim que Layka avança rapidamente através da sala, uma armadilha é ativada e várias facas afiadas são lançadas em direção a ela. Layka é atingida por diversas facas e não resiste ao sangramento causado pelos ferimentos. Tente novamente!");
        break;
        } else {
            alert("Escolha INVÁLIDA. Digite 1 ou 2");
            escolha3 = prompt("ESCOLHA 1: Layka deve agir rapidamente e avançar em direção a mesa para coletar o artefato. \nESCOLHA 2: Layka inspeciona o ambiente antes de avançar em direção ao artefato.");
        }
    }

}
  