//Object.create()

//Creates new object with prototype set to certain object

const vehicle = {
    //making a constructor sound

    init: function(sound){
        this.sound = sound;
    },
    startEngine: function(){
        console.log(this.sound);
    }
};

const premierPadmini = Object.create(vehicle);
premierPadmini.init('Boor Voor');
premierPadmini.startEngine();

const ferrari = Object.create(vehicle);
ferrari.init('Vroom Vroom');
ferrari.startEngine();

console.log(vehicle.isPrototypeOf(premierPadmini)); //true

//More natural to 