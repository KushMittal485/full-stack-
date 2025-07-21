class pets{
    constructor(name, age){
        this.name = name;
        this.age =age;
    }
    eat(){
        return `${this.name} is eating.`
    }
}

class cat extends pets{//extends use the previous class properties
    constructor(name, age, lives=9){
        super(name, age);//extra parameters
        this.lives = lives;
    }
    meow(){
        return "MEOOWWWW"
    }
}

let pet1 = new pets('ruby', 9);// new keyword is very important to make an object
let cat1 = new cat('smasher', 9)