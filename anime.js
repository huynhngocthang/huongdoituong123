let sogoku1 = document.getElementById('sogoku1');
class Humman {
    constructor(style) {
        this.style=style;
    }
    acTion() {
        if(this.style) return true;
        else return false; 
    }
    turnOf() {
        this.style=false;
       return sogoku1.src='bienhinh.png';
    }
    turnOn() {
        this.style=true;
      return  sogoku1.src='bienhinh1.png';
    }
    bienDoi() {
        if(this.style) {
            this.style=false
            return sogoku1.src='bienhinh.png';
        } else {
            this.style=true
            return sogoku1.src='bienhinh1.png';
        }
    }
}
let sogoku=new Humman(false);
function bienhinh() {
    sogoku.bienDoi();
}