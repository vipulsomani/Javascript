const my =2;
my2 = my;
console.log(my2);//actyally copyiong the fdata of my in my2




const person ={
    name : 'vipul'
};
//const secondPerson = person;//not copies pointer concept
const secondPerson ={
    ...person //so for actually copying we use spread operator
};
person.name = 'somani';
console.log(secondPerson);
console.log(person);