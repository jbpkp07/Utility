class Animal {

    constructor(name, age, sound = null) {
        
        this.name = name;  
        this.age = age;
        this.sound = sound;
    }

    logStats() {

        console.log(`Hi my name is \"${this.name}\" and I am ${this.age} years old.`);
    }

    makeSound() {

        if (this.sound !== null) {

            console.log(`The sound I make is: ${this.sound}`);       
        } 
        else {

            console.log("Sorry, I am too \"generic\" or what we call \"abstract\" to make a sound.");   
        }
    }
}


//Dog inherits what Animal provides, and then can "extend" it further to be more specific to what a dog is
class Dog extends Animal {  

    constructor(name, age, walks) {
        
        super(name, age, "Bark");  //class Animal (the "super" class) gets these parameters

        this.walks = walks;
    }

    goForAWalk() {  //going for a walk is specific to a dog

        console.log(`I'm a dog, and I go for walks. I go on ${this.walks} per week.`);  //something specific a dog does (not all animals)
    }
}


//Cat also extends animal just like dog did above
class Cat extends Animal {

    constructor(name, age, yarnBalls) {
        
        super(name, age, "Meow");  //class Animal (the "super" class) gets these parameters

        this.yarnBalls = yarnBalls;
    }

    unravelYarn() {  //unraveling yarn is specific to a cat

        console.log(`I'm a cat, and I like to unravel ${this.yarnBalls} per week.`);  //something specific a cat does (not all animals)
    }
}



const genericAnimal = new Animal("Earl", 9);

genericAnimal.logStats();     //Hi my name is "Earl" and I am 9 years old.
genericAnimal.makeSound();    //Sorry, I am too "generic" or what we call "abstract" to make a sound.  (sound was not specified, so it defaulted to 'null')
genericAnimal.goForAWalk();   //ERROR  class Animal is not aware of the function goForAWalk()  (it only belongs to class Dog)


const animal = new Animal("Earl2", 3, "Quack");

animal.logStats();     //Hi my name is "Earl2" and I am 3 years old.
animal.makeSound();    //The sound I make is: Quack  (because this time we specified the sound!)
animal.goForAWalk();   //ERROR  class Animal is not aware of the function goForAWalk()  (it only belongs to class Dog)


const dog = new Dog("Earl3", 4, 12);   //we don't need to specify the sound it makes, as this class wraps the specifics to what a dog is

dog.logStats();     //Hi my name is "Earl3" and I am 4 years old.
dog.makeSound();    //The sound I make is: Bark
dog.goForAWalk();   //I'm a dog, and I go for walks. I go on 12 per week.



//Here you can rapidly create new objects that hold their own data and "state". 
//They are self contained mini-programs that have data and their own functions that act on their own data. (self contained code)
const manyCats = [];

manyCats.push(new Cat("Cat1", 1, 5));
manyCats.push(new Cat("Cat2", 4, 3));
manyCats.push(new Cat("Cat3", 7, 9));

let count = 1;

for (const cat of manyCats) {

    console.log(`Cat #${count} ---------`);
    count++;

    cat.age++;  //each cat's age is incremented up by 1

    cat.logStats();
    cat.makeSound();
    cat.unravelYarn();

    console.log("\n");
}


/*
Cat #1 ---------
Hi my name is "Cat1" and I am 2 years old.
The sound I make is: Meow
I'm a cat, and I like to unravel 5 per week.

Cat #2 ---------
Hi my name is "Cat2" and I am 5 years old.
The sound I make is: Meow
I'm a cat, and I like to unravel 3 per week. 

Cat #3 ---------
Hi my name is "Cat3" and I am 8 years old.
The sound I make is: Meow
I'm a cat, and I like to unravel 9 per week.
*/