// js class is a simulation of class from ES6
class Person {


    constructor(name, age){
        this.name = name
        this.age = age
    }

    greet(){
        console.log('Hello, my name is ' + this.name)
    }
}

const adam = new Person('Adam', 35)
adam.greet()

const janja = new Person("Janja", 25)
janja.greet()