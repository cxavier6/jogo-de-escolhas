var escolha;
var escolha2;
var escolha3;


function anakan() {
    alert("Anakan parte em direção ao planeta X-Jarros, todo o seu céu é coberto por inúmeras camadas de nuvens, tempestades que nunca acabam, na entrada do planeta o painel de controle fica vermelho, mostrando um erro no estabilizador elétrico pela constante descarga elétrica.");
    escolha = prompt("ESCOLHA 1: Anakan deve escolher abandonar a nave em um pod. ESCOLHA 2: Anakan deve tentar realizar um pouso de emergência.");
    
    while(true){
        if (escolha == "2") {
            alert("Parabéns, você passou para a próxima fase!"); 
        break;     
        } else if (escolha == "1") {
            alert("A nave foi totalmente destruída depois que Anakan à abandonou, ele sobreviveu por muitos anos no planeta mas sem acesso a qualquer uma das suas ferramentas ele nunca conseguiu sair. Tente novamente!"); 
        break;
        } else {
            alert("Escolha INVÁLIDA. Digite 1 ou 2");
            escolha = prompt("ESCOLHA 1: Anakan deve escolher abandonar a nave em um pod. ESCOLHA 2: Anakan deve tentar realizar um pouso de emergência.");
        } 
    }    
}

function anakan2(){
    alert("Anakan conseguiu com muito esforço pousar a nave em um lago raso. Ele sai da nave com seus equipamentos enquanto o estabilizador elétrico volta ao normal. Para sua sorte, não muito distante há um depósito de VAR brilhando em vermelho sangue. Na esperança de acabar logo sua missão para não ter maiores problemas com a tempestade elétrica que se aproxima, Anakan se vê em um impasse, agir com cautela ou agir com rapidez.");
    escolha2 = prompt("ESCOLHA 1: Anakan deve usar seus equipamentos para analisar o minério antes de o minerar e guardar no pote. \nESCOLHA 2: Anakan deve agir com rapidez e tenta coletar o minério antes que a tempestade chegue.");

    while(true){
        if(escolha2 == "1"){
            alert("Parabéns, você passou para a próxima fase!");
        break;
        } else if (escolha2 == "2"){
            alert("Devido a velocidade com que coletar o minério e por causa do seu nervosismo, suas mãos trêmulas derrubam o VAR que por estar instável explode, acabando com a jornada como explorador espacial no Anakan. Tente novamente!");
        break;
        } else {
            alert("Escolha INVÁLIDA. Digite 1 ou 2");
            escolha2 = prompt("ESCOLHA 1: Anakan deve usar seus equipamentos para analisar o minério antes de o minerar e guardar no pote. \nESCOLHA 2: Anakan deve agir com rapidez e tenta coletar o minério antes que a tempestade chegue.");
        }
    }
}

function anakan3(){
    alert("Anakan analisa o minério e percebe sua instabilidade e a necessidade de usar um coletor de minério especial, além de agir com mais cautela para coletar e guardar o material. Ele consegue coletar com sucesso e guardar em um pote, em compensação a tempestade ruge do seu lado, a nave está um pouco distante mas há uma caverna próxima.");
    escolha3 = prompt("ESCOLHA 1: Anakan deve correr o mais rápido que puder em direção a nave, mesmo que de encontro à tempestade e ir embora logo do planeta. \nESCOLHA 2: Anakan deve tentar se proteger da tempestade na caverna e aguardar até que a tempestade passe.");

    while(true){
        if(escolha3 == "1"){
            alert("A missão é concluída com sucesso e com a ajuda dos outros exploradores espaciais a construção do estabilizador de núcleo consegue ser concluída com sucesso e a tempo! Foi uma ótima jornada!")
        break;
        } else if (escolha3 == "2"){
            alert("Logo após entrar na caverna muito pouco tempo se passa até a tempestade chegar no local onde ele se encontra, raios atingem a entrada da caverna, derrubando toda a sua estrutura e enterrando Anakan. Tente novamente!")
        break;
        } else {
            alert("Escolha INVÁLIDA. Digite 1 ou 2");
            escolha3 = prompt("ESCOLHA 1: Anakan deve correr o mais rápido que puder em direção a nave, mesmo que de encontro à tempestade e ir embora logo do planeta. \nESCOLHA 2: Anakan deve tentar se proteger da tempestade na caverna e aguardar até que a tempestade passe.");
        }
    }

}
  


