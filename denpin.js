let turnof = document.getElementById('turnof');
let turnon = document.getElementById('turnon');

// class Battery {
//     constructor(energy) {
//         this.energy = energy;
//     }
//     setEnergy = function (energy) {
//         this.energy = energy;
//     }
//     getEnergy = function () {
//         this.energy;
//     }
//     decreaseEnergy = function () {
//         if(this.energy > 0)
//             this.energy--;
//     }
// }

class Flashlamp {
    constructor(status) {
        this.status = status;
    }
    light() {
        if (this.status) {
            return turnon;

        } else {

            return turnof;
        }
    }
    turnOn() {
        this.status = true;
        turnof.src = 'idea.png';
        // console.log(turnon.src);
    }
    turnOf() {
        this.status = false;
        turnof.src = 'idea (1).png';
    }

    battat() {
        if(this.status) {
            this.status = false;
            turnof.src = 'idea (1).png';
        } else {
            this.status = true;
            turnof.src = 'idea.png';
        }
    }
}
let flashlamp = new Flashlamp(false);

function denpin() {
    flashlamp.battat()
}


