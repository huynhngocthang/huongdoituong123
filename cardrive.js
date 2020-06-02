let mycanvas = document.getElementById('mycanvas');
let ctx = mycanvas.getContext('2d');
let xeoto = document.getElementById('xeoto');
let bitcoin = document.getElementById('bitcoin');

class Carbike {
       constructor(x, y, width, height) {
              this.x = x;
              this.y = y;
              this.width = width;
              this.height = height;
              this.speed = 1;
       }

       moveRight() {
              this.x += this.speed;
       }
       moveLeft() {
              this.x -= this.speed;
       }
       moveUp() {
              this.y -= this.speed;
       }
       moveDown() {
              this.y += this.speed;
       }
}

// class Bitcoin {
//        constructor(x, y, width, height) {
//               this.x = x;
//               this.y = y;
//               this.width = width;
//               this.height = height;
//        }
// }
// let coin = new Bitcoin(200, 50, 50, 50);
// function coinn() {

//        ctx.drawImage(bitcoin, coin.x, coin.y, coin.width, coin.height);
// }



let car = new Carbike(0, 0, 50, 50);
let car1 = new Carbike(50, 50, 50, 50);
let coin=new Carbike(200,100,50,50);

function maycay() {
       ctx.clearRect(0, 0, mycanvas.width,mycanvas.height);
       ctx.drawImage(xeoto, car.x, car.y, car.width, car.height);
       ctx.drawImage(xeoto, car1.x, car1.y, car1.width, car1.height);
       ctx.drawImage(bitcoin,coin.x,coin.y,coin.width,coin.height);
       // car.moveRight();
       // car1.moveRight();
       // car1.speed = 5;
       
       requestAnimationFrame(maycay);
}





document.addEventListener('keydown', move);

function move(e) {
       switch (e.keyCode) {
              case 39:
                     car.moveRight();
                     break;
              case 37:
                     car.moveLeft();
                     break;
              case 38:
                     car.moveUp();
                     break;
              case 40:
                     car.moveDown();
                     break;
              case 17:
                     car.speed += 5;
                     break;
              default:
                     break;

       }
}

maycay();
