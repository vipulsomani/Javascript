//Spread
const no = [1,2,3];
const newno =[...no,4,5];
console.log(newno);

const person = {
    name : 'vipul',
    surname : 'somani'
};
const newPerson = {
    ...person,
    age: 20
}
console.log(newPerson);

//rest
const filter = (...args) => {
    //return args.filter(el => el ===1);
    return args;
}
console.log(filter(1,2,3,4,5,6,'Somani'));