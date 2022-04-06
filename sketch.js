var bola, bordaCima, bordaBaixo, BordaDireita, BordaEsquerda
var bloco
var blocos
var a = "pink"
var b = "aquamarine"
var d = "lightGreen"
var e = "lightSalmon"
var f = "paleVioletRed"
var g = "LemonChiffon"
var cores = [a, b, d, e, f, g]
var s1 
var s2 
var s3 
var s4
var s5 
var s6
var sons = [s1,s2, s3, s4, s5, s6]
function preload () {
    s1 = loadSound("s1.mp3")
    s2 = loadSound("s2.mp3")
    s3 = loadSound("s3.mp3")
    s4 = loadSound("s4.mp3")
    s5 = loadSound("s5.mp3")
    s6 = loadSound("s6.mp3")
}

function setup() {
    createCanvas(800,800)
    bola = new Bola();
    bordaCima = new Bordas(400, 25, "h", random(cores))
    bordaBaixo = new Bordas(400, 775, "h", random(cores))
    bordaDireita = new Bordas(775, 400, "v", random(cores))
    bordaEsquerda = new Bordas(25, 400, "v", random(cores))
    
    blocos = new Group()
    

}

function draw() {
    background(color(10, 20, 30));
    if (keyDown("space")) {
        bola.sprite.velocityX = 10
        bola.sprite.velocityY = 05
    }

    bola.quicar(blocos);
    bola.sprite.bounceOff(bordaBaixo.sprite)
    bola.sprite.bounceOff(bordaCima.sprite)
    bola.sprite.bounceOff(bordaDireita.sprite)
    bola.sprite.bounceOff(bordaEsquerda.sprite)
    
    drawSprites();

}
function mousePressed() {
    bloco = new Bloco (random(cores))
    bloco.sprite.depth = 0
    blocos.add(bloco);
}