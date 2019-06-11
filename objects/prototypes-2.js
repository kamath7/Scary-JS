//prototypal vs classical oop

var human = {
    species: "human",
    
    sayIt: function(){
        console.log(this.species);
    },
    sayname: function(){
        console.log(this.name);
    }
};

var cricketer = Object.create(human);
cricketer.bat = function(){
    console.log('Hitting a four with '+this.bats);
}

var finch = Object.create(cricketer);
finch.name = 'Finch';
finch.bats = 'MRF';

finch.bat();
finch.sayname();
finch.sayIt();

