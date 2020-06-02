let mycanvas=document.getElementById('mycanvas');
let ctx=mycanvas.getContext('2d');
let ironman1=document.getElementById('ironman1');
let captan1=document.getElementById('captan1');
let fire1=document.getElementById('fire1');

class Herros {
    constructor(x,y,width,height) {
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.speed=1;
    }
    moveRight() {
        this.x+=this.speed;
    }
    moveLeft() {
        this.x-=this.speed;
    }
    moveUp() {
        this.y-=this.speed;
    }
    moveDown() {
        this.y+=this.speed;
    }

}

let ironnman=new Herros(100,100,100,100);
let captan=new Herros(400,100,100,100);
let fire = new Herros(100, 175, 100, 100);

function image() {
    ctx.clearRect(0,0,mycanvas.width,mycanvas.height);
    ctx.drawImage(ironman1,ironnman.x,ironnman.y,ironnman.width,ironnman.height);
    ctx.drawImage(captan1,captan.x,captan.y,captan.width,captan.height);
    ctx.drawImage(fire1,fire.x,fire.y,fire.width,fire.height);
    captan.moveLeft();
    requestAnimationFrame(image);
}
document.addEventListener('keydown',chuyendong);
function chuyendong(e) {
    switch (e.keyCode) {
        case 39:
            ironnman.moveRight();
            fire.moveRight();
            break;
        case 37:
            ironnman.moveLeft();
            fire.moveLeft();
            break;
        case 38 :
            ironnman.moveUp();
            fire.moveUp();
            break;
        case 40 :
            ironnman.moveDown();
            fire.moveDown();
            break;
        case 17 :
            ironnman.speed+=5;
            fire.speed+=5;
            break;
            default:
                break;
    }
}
image();
