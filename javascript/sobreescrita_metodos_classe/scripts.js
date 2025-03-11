// sobreescrever métodos

class Animal {
    constructor(name){
        this.name = name
    }

    makeNoise(){
        console.log("Algum som genérico do animal")
    }
}

class Dog extends Animal {
    makeNoise(){
        console.log("Woof! Woof!")
    }
}

const dog = new Dog("Belinha") 
console.log(dog.name)
dog.makeNoise()

class Cat extends Animal {
    makeNoise(){
        console.log("Miau Miau")
    }

    run(){
        console.log("Correndo")
    }
}

const cat = new Cat("Laika")
console.log(cat.name)
cat.makeNoise()
cat.run()