class User{

    constructor(name,age,email){
        this.name = name;
        this.age = age;
        this.email = email;
    }

    tellMyDetails(){
        console.log(this.name+ " "+this.age+" "+this.email);
    }
    giveMeDollars(dollars){
        console.log(`${this.name} has received $${dollars}`);
    }
}

var myObj = new User("Kochikame",20,"kochi@kame.com"); //create new object, sets this to the new empty object, calls constructor method
myObj.tellMyDetails();
myObj.giveMeDollars(500);

var myObj1 = new User("Conan",19,"con@an.com");
myObj1.tellMyDetails();
myObj1.giveMeDollars(760);

