// Herança

class Animal {
    constructor(name){
        this.name = name
    }

    makeNoise(){
        console.log("Algum som genérico do animal")
    }
}

class Dog extends Animal {

}

const dog = new Dog("Belinha") 
console.log(dog.name)
dog.makeNoise()

class Cat extends Animal {
    
}

const cat = new Cat("Laika")
console.log(cat.name)
cat.makeNoise()