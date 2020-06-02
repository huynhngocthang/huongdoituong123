let denof = document.getElementById('denof') ;
let denon = document.getElementById('denon');

class SwitchButton {
    constructor(status) {
        this.status=status;
        this.lamp= new EletricLamp(status);
    }
    connectTolamp() {
        if(this.status) return false;
        return true;
    }
    switchOff() {
        this.status=false;
        this.lamp.TurnOff()
    }
    switchOn() {
        this.status=true ;
        this.lamp.TurnOn();
    }
}
class EletricLamp {
    constructor(status) {
        this.status=status;
    }
    TurnOff() {
        this.status=false;
        denof.src="bongdenon.png";
    }
    TurnOn() {
        this.status=true;
        denof.src="bongdenof.png";
    }
    battat() {
        if(this.status) {
            this.status=false;
            denof.src="bongdenon.png";
        }
        else {
            this.status=true;
            denof.src="bongdenon.png";;
        }
    }
}
let switchButton= new SwitchButton(false);
function lampp() {
    // eletricLamp.battat();
    if (switchButton.status){
        switchButton.switchOff();
    }
    else{
        switchButton.switchOn();
    }
}

    