//arrow functions and this

const animal= {
    name: 'Lion',
    weight: 250, //kgs assuming
    //description: ()=>`This ${this.name} weighs ${this.weight}. ${this}` // this does not work. because this is bound to the context they were declared in global object. Hence we get undefined
    description: function(){
        return `This ${this.name} weighs ${this.weight} `; //works. because this is bind to animal object
    }

}

console.log(animal.description());

const me = {
    name: 'Mark',
    age: '53',

    description: ()=> `I, ${me.name} am of about ${this.age} years old!` //works because I have bound this for name to the me object
}

console.log(me.description());