class User{
    constructor(name,email,password){
        this.name = name;
        this.email = email;
        this.password = password;
    }

    static helloMessage(){
        console.log("Welcome user!");
    }

    idRegister(){
        console.log(this.name+" has been registered!");
    }
}

class SpecialMember extends User{
    constructor(name,email,password,lallePackage){
        super(name,email,password);
        this.package = lallePackage;
    }
    getPackage(){
        console.log(this.name,"has a ",this.package,"package!");
    }
}

let bob = new User("Bob","bob@bob.com","bob1234");
User.helloMessage(); //for using static methods
bob.idRegister();

let mike = new SpecialMember("mike","mike@mike.com","mike1234","Elite");
mike.getPackage();
mike.idRegister();

