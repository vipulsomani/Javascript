class User{
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    static countUser(){
        console.log('Hi there are 50 user');
    }
    register(){
        console.log(this.username + ' is now registered');
    }
}
let vip = new User('Vipul','vip@gmail.com',123456789);
//vip.register();
User.countUser();


class Member extends User{
    constructor(username,email,password,memberPackage){
        super(username,email,password);
        this.package = memberPackage;

    }
    getpackage(){
        console.log(this.username + ' is having ' + this.package);
    }
}
let som = new Member('Vipul','vip@.com',123,'Standard');
//som.getpackage();
som.register();

