var escolha;
var escolha2;
var escolha3;


function cowboy() {
    alert("Cowboy Spacial chega ao seu destino, o planeta Rex-18, planeta coberto por dunas gigantescas e rastros gigantes do que parecem ser criaturas que outrora existiram por lá. Enquanto sobrevoa a área tentando rastrear RES-ILIA sua nave é atacada por ladrões espaciais, danificando sua estrutura.");
    escolha = prompt("ESCOLHA 1: Cowboy Spacial deve abandonar a nave em um pod o mais rápido possível. \nESCOLHA 2: Cowboy Spacial deve tentar realizar pouso de emergência no deserto.");
    
    while(true){
        if (escolha == "1") {
            alert("Parabéns, você passou para a próxima fase!"); 
        break;     
        } else if (escolha == "2") {
            alert("Mesmo com a estrutura de sua nave comprometida o Cowboy Spacial consegue aterrisar, mas os ladrões, que vieram roubar componentes da sua nave, são muitos. Cowboy Spacial tenta se defender e combater eles, mas perde... Tente novamente!"); 
        break;
        } else {
            alert("Escolha INVÁLIDA. Digite 1 ou 2");
            escolha = prompt("ESCOLHA 1: Cowboy Spacial deve abandonar a nave em um pod o mais rápido possível. \nESCOLHA 2: Cowboy Spacial deve tentar realizar pouso de emergência no deserto.");
        } 
    }    
}

function cowboy2(){
    alert("O pod é ejetado enquanto a nave cai em queda livre. Chegando ao chão o cowboy spacial nota que as naves dos ladrões espaciais foram em direção à sua nave. Ele começa a caminhar nas dunas com o pouco equipamento que tem e avista um buraco enorme com várias árvores ao redor, indicando a existência de água e possivelmente do elemento RES(fica próximo a ambientes com H2O).  Ao se aproximar ele percebe que para descer pode ir por um caminho no qual ele não enxerga nada ou realizar um salto de fé para tentar cair no que parece ser um lago fundo.");
    escolha2 = prompt("ESCOLHA 1: Cowboy Spacial deve seguir o caminho escuro e tentar ir iluminando com sua lanterna de ombro. \nESCOLHA 2: Cowboy Spacial deve realizar o salto de fé.");

    while(true){
        if(escolha2 == "2"){
            alert("Parabéns, você passou para a próxima fase!");
        break;
        } else if (escolha2 == "1"){
            alert("Cowboy Spacial tenta seguir o caminho nas dunas escuras e encontra com uma criatura colossal e extremamente forte, sem suas armas que ficaram na nave, Cowboy Spacial e é atacado e morre. Tente novamente!");
        break;
        } else {
            alert("Escolha INVÁLIDA. Digite 1 ou 2");
            escolha2 = prompt("ESCOLHA 1: Cowboy Spacial deve seguir o caminho escuro e tentar ir iluminando com sua lanterna de ombro. \nESCOLHA 2: Cowboy Spacial deve realizar o salto de fé.");
        }
    }
}

function cowboy3(){
    alert("Ao realizar seu salto de fé, Cowboy Spacial se vê em um lago no qual ele não enxerga o fundo devido a escuridão, mas ele identifica um ponto brilhante abaixo dele. Ao seu redor, apenas uma estrutura de pedras em ruínas e árvores, sem indicação de muita margem para exploração.");
    escolha3 = prompt("ESCOLHA 1: Cowboy Spacial deve mergulhar e explorar o ponto brilhante no lago. \nESCOLHA 2: Cowboy Spacial deve sair do lago e explorar as ruínas.");

    while(true){
        if(escolha3 == "1"){
            alert("A missão é concluída com sucesso e com a ajuda dos outros exploradores espaciais a construção do estabilizador de núcleo consegue ser concluída com sucesso e a tempo! Foi uma ótima jornada!")
        break;
        } else if (escolha3 == "2"){
            alert("No momento em que sai do lago, Cowboy Spacial escuta um barulho estridente vindo de um dos cantos da ruína, mesmo assim ele decide explorar o que existe ao seu redor. Sem tempo de reação, Cowboy Spacial é arremessado por uma criatura em direção a parede de pedras e não sobrevive. Tente novamente!")
        break;
        } else {
            alert("Escolha INVÁLIDA. Digite 1 ou 2");
            escolha3 = prompt("ESCOLHA 1: Cowboy Spacial deve mergulhar e explorar o ponto brilhante no lago. \nESCOLHA 2: Cowboy Spacial deve sair do lago e explorar as ruínas.");
        }
    }

}
  