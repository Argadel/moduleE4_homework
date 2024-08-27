// 1. Определить родительскую функцию с методами, которые включают/выключают прибор из розетки.
// 2. Создать делегирующую связь [[Prototype]] для двух конкретных приборов.
// 3. У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от
// родительских методов.
// 5. Создать экземпляры каждого прибора.
// 6. Вывести в консоль и посмотреть результаты работы.


const deskLamp = new Gadgets('Desk lamp', 60);
const computer = new Gadgets('Computer', 300);

function Gadgets(type, power) {
    this.type = type;
    this.power = power;
    this.isSwithcedOn = false;
}

Gadgets.prototype.switchIn = function() {
    console.log(this.type + ' is switched on!');
    console.log('Its power is ' + this.power);
    this.isSwithcedOn = true;
}

Gadgets.prototype.getUsedPower = function() {
    return this.isSwithcedOn ? this.power : 0;
}


console.log('Current power is ' + (deskLamp.getUsedPower() + computer.getUsedPower()));

deskLamp.switchIn();
console.log('Total power is ' + (deskLamp.getUsedPower() + computer.getUsedPower()));

computer.switchIn();
console.log('Now total power is ' + (deskLamp.getUsedPower() + computer.getUsedPower()));
