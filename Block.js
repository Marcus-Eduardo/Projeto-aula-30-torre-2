class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      };
      //adicione a imagem block.png a esta classe
      //adicione propriedade de visibilidade
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.visibilidade = 255;
      this.image = loadImage("block.png");
    }
    display(){
      //se a velocidade dos blocos for menor que 3, exiba a caixa
      //se não for, remova a caixa do mundo, adicione uma imagem no lugar e faça com que ela desapareça devagar
      if(this.body.speed < 3){
        var pos= this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width, this.height);
    } else {
        World.remove(world, this.body);
        push();
        this.visibilidade = this.visibilidade -5
        tint(255,this.visibilidade);
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
        
    }
    }
}