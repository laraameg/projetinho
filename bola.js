class Bola {
    constructor() {
        this.cor = "white"
        this.image = loadImage("bola.png")
        this.sprite = createSprite(400, 400)
        this.sprite.addImage(this.image);
        this.sprite.scale = 0.08;
    }
    
    quicar(sprite){
        this.sprite.bounceOff(sprite);
    }
}