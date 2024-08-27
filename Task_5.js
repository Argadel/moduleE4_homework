// Переписать консольное приложение из предыдущего юнита на классы.


class Gadgets {

    constructor(type, power)
    {
        this.type = type;
        this.power = power;
        this.isSwithcedOn = false;
    }

    switchIn()
    {
        console.log(this.type + ' is switched on!');
        console.log('Its power is ' + this.power);
        this.isSwithcedOn = true;
    }

    getUsedPower()
    {
        return this.isSwithcedOn ? this.power : 0;
    }
}


const deskLamp = new Gadgets('Desk lamp', 60);
const computer = new Gadgets('Computer', 300);


console.log('Current power is ' + (deskLamp.getUsedPower() + computer.getUsedPower()));

deskLamp.switchIn();
console.log('Total power is ' + (deskLamp.getUsedPower() + computer.getUsedPower()));

computer.switchIn();
console.log('Now total power is ' + (deskLamp.getUsedPower() + computer.getUsedPower()));
