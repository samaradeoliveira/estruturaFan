//variáveis
//torre e auxiliar de torre para imagem
var tower, towerImg;
//porta, portagrupo, auxiliar para imagem
var doorImg, door, doorsGroup;
//grade, auxiliar de imagem, Gradegrupo
var climberImg, climber, climbersGroup;
//fantasma, auxiliar de imagem
var ghost, ghostImg;
//bloco invisível, e grupo de bloco invisível
var invisibleBlockGroup, invisibleBlock;

//estado de jogo
var gameState = "play"

function preload() {
  //imagens
  
  //som
  
}

function setup() {
  createCanvas(600, 600);

  //colocar o som para tocar 


  //sprite da torre e suas características
  tower = createSprite(300, 300);
  tower.addImage("tower", towerImg);
  tower.velocityY = 1;

  //sprite do fantasma e suas características 




  //criação de grupos
  doorsGroup = new Group();



}

function draw() {
  background("black");

  //verificação dos estados de jogo 
  //gamestate === "play"
  if (gameState === "play") {

    if (keyDown("left_arrow")) {
      ghost.x = ghost.x - 3;
    }

    //direita


    //se apertar espaço tem que pular


    //gravidade


    //recarregamento da imagem da torre
    if (tower.y > 600) {
      tower.y = 0;
    }

    //chamar a função de criar portas aqui
    Portas();

    //verificação de fim de jogo aqui




  }


  //código para desenhar qualquer sprite
  drawSprites();
}

//tudo que acontece quando gameState === "end"




//função para criar portas 
function Portas() {
  //escreva aqui o código para gerar as portas na torre
  if (frameCount % 240 === 0) {
    //SPRITES PORTA, GRADE, TIJOLO INVISÍVEL
    door = createSprite(200, -50);
    climber = createSprite(200, 10);
    invisibleBlock = createSprite(200, 15);

    //TIJOLO ACOMPANHA A GRADE E TEM UMA "ALTURAZINHA"
    invisibleBlock.width = climber.width;
    invisibleBlock.height = 2;

    //POSIÇÃO DA PORTA DURANTE O JOGO
    door.x = Math.round(random(120, 400));
    //GRADE ACOMPANHA ESSA ALEÁTORIEDADE 
    climber.x = door.x;
    //TIJOLO INVISÍVEL TAMBÉM ACOMPANHA ISSO
    invisibleBlock.x = door.x;

    //ADC IMAGENS 
    door.addImage("porta", doorImg);
    climber.addImage(climberImg);

    //ADC VELOCIDADE
    door.velocityY = 1;
    climber.velocityY = 1;
    invisibleBlock.velocityY = 1;

    //ELE RECEBE A PROFUNDIDADE DA PORTA PARA APARECER DEPOIS DA PORTA 
    ghost.depth = door.depth;
    ghost.depth += 1;

    //tempo de vida a variável
    door.lifetime = 800;
    climber.lifetime = 800;
    invisibleBlock.lifetime = 800;


    //adicione cada porta ao grupo
    doorsGroup.add(porta);
    climbersGroup.add(grade);
    invisibleBlockGroup.add(invisibleBlock);

    //ligando o raio colisor 
    invisibleBlock.debug = true;


  }
}