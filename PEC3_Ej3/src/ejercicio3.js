"use strict";
class Animal {
    constructor() {
        Animal.population++;
    }
}
Animal.population = 0;
class Dog extends Animal {
    constructor(color) {
        super();
        this.color = color;
    }
    sound() {
        console.log('WOW');
    }
    iamadog() {
        console.log('yes, this is a dog');
    }
}
class Cat extends Animal {
    constructor(gender) {
        super();
        this.gender = gender;
    }
    sound() {
        console.log('MEOW');
    }
    iamacat() {
        console.log('yes, this is a cat');
    }
}
let animals = [];
animals.push(new Cat('male'));
animals.push(new Dog('white'));
animals.push(new Cat('female'));
animals.push(new Dog('black'));
for (let animal of animals) {
    if (animal instanceof Cat) {
        animal.iamacat();
    }
    else {
        animal.iamadog();
    }
    animal.sound();
}
console.log(Animal.population);
