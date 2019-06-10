function bark(sound){
    // console.log(this); //will be global object
    console.log(this.sound);

}
let dog = {
    bark
    //here this will be dog
};
let basenji = {
    sound: 'Arroowwoff'
};
let germanShepherd = {
    sound: 'Arf arf'
};
// bark('Woof Woof');//woof woof
let alsatian = {
    howl: function(){
        console.log(this.sound.toUpperCase());
    }
};
bark();//undefined
dog.bark();
Object.setPrototypeOf(basenji,dog);
Object.setPrototypeOf(germanShepherd,dog);
Object.setPrototypeOf(alsatian,germanShepherd);
basenji.bark();
germanShepherd.bark();
alsatian.howl();