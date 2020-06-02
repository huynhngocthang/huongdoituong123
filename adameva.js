let adam1=document.getElementById('adam1');
let eva1=document.getElementById('eva1');
let mycanvas=document.getElementById('mycanvas');
let ctx=mycanvas.getContext('2d');
let apple1=document.getElementById('apple1');

class Imagee {
    constructor(x,y,width,height) {
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
    }
} 
    let Eva1=new Imagee(100,200,100,100);
    let Adam1=new Imagee(150,200,100,100);
    let Apple1=new Imagee(400,200,80,80);

    function vetranh() {
        ctx.drawImage(adam1,Adam1.x,Adam1.y,Adam1.width,Adam1.height);
        ctx.drawImage(eva1,Eva1.x,Eva1.y,Eva1.width,Eva1.height);
        ctx.drawImage(apple1,Apple1.x,Apple1.y,Apple1.width,Apple1.height);
    }
    class Apple {
        constructor(weight) {
            this.weight=weight;
        }
        decrease() {
           return this.weight--;
        }
        isEmpty() {
            if(this.weight<0) 
            return ('táo hết rồi');
            else return ('còn táo nha');
        }
        getWeight() {
           return this.weight;
        }
    }

    class Human {
        constructor(name,gender,weight) {
            this.name=name;
            this.gender=gender;
            this.weight=weight;
        }
        isMale() {
            if(gender)  true; 
            else false;
        }
        checkApple() {
            return isEmpty();
        }
        eat(tangcan) {
          return tangcan= this.weight+1;
          
        }
        say (str) {
            return (this.name+':'+str) ;
        }
        getName() {
            return this.name;
        }
        getWeight() {
          return  this.weight;
        }
        setWeight(weight) {
            this.weight=weight;
        }
    }
    let adam=new Human('Adam',true,50);
    let eva=new Human('Eva',false,40);

    function reaction() {
        console.log(adam.say('hôm nay là thứ mấy'));
        console.log(eva.say('chắc chắn là thứ 2'));
        console.log(adam.say('ăn táo không mày'));
        console.log(eva.say('ăn luôn'));
        console.log(eva.say('tới lấy quả táo và ăn '));
    }
    
   
    reaction()
    vetranh()

