let myObj ={};
myObj.name ="Vipul"
myObj.age=20;
myObj.class = "js";

let myObj1 = {
    name :"Somani",
    age : 30,
    class :"js"
};
console.log(myObj);
console.log(myObj1);

function create_obj(iname,iage,iclass){
    let obj ={
        name : iname,
        age: iage,
        class : iclass
    };
    return obj;
}
let myObj3 = create_obj("yash",20,"HTML");
console.log(myObj3);