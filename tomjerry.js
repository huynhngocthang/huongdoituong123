
let cat1 = document.getElementById('cat1');
let jerry1 = document.getElementById('jerry1');


class Rat {
    constructor( name, weight, style) {
        this.name = name;
        this.weight = weight;
        this.speed = 2
        this.style = style;
    }
    beHavior(str) {
        return (this.name + ':' + str);
    }
    beEaten() {
        return this.weight=this.weight-1;
    }
}
class Cat {
    constructor(name,weight) {
        this.name = name;
        this.weight = weight;
        this.speed=4;
    }
    beHavior(str) {
        return (this.name + ':' + str);
    }
    Eat() {
        return this.weigh=this.weight+1;
    }
}
let jery=new Rat('jery',5,true);
let tom=new Cat('Tom',10);
console.log(jery.beHavior('chít chít'));
console.log(tom.beHavior('Mew Mew'));
console.log(tom.beHavior('ăn chuột'));
console.log('khối lượng của chuột bị giảm' + jery.beEaten());
console.log('khối lượng của tom tăng lên' +tom.Eat());
console.log('khối lượng của chuột bị giảm' + jery.beEaten());



    

