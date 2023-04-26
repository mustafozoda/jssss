
























// const person = {
//     name: 'John',
//     age: 30,
//     hobbies: ['reading', 'running']
// };

// console.log(person.name); // output: 'John'
// console.log(person['age']); // output: 30




// const person = {
//     name: 'John',
//     age: 30,
//     hobbies: ['reading', 'running']
// };




// function Person(name, age, hobbies) {
//     this.name = name;
//     this.age = age;
//     this.hobbies = hobbies;
// }

// const john = new Person('John', 30, ['reading', 'running']);






// const person = {
//     name: 'John',
//     age: 30,
//     hobbies: ['reading', 'running']
// };

// const entries = Object.entries(person);
// console.log(entries); // output: [['name', 'John'], ['age', 30], ['hobbies', ['reading', 'running']]]




// const person = {
//     name: 'John',
//     age: 30,
//     hobbies: ['reading', 'running']
// };

// const keys = Object.keys(person);
// console.log(keys); // output: ['name', 'age', 'hobbies']




// const person = {
//     name: 'John',
//     age: 30,
//     hobbies: ['reading', 'running']
// };

// const values = Object.values(person);
// console.log(values); // output: ['John', 30, ['reading', 'running']]




// const person = {
//     name: 'John',
//     age: 30,
//     hobbies: ['reading', 'running', 'cooking']
// };






// const { name, age } = person;




// console.log(name); // 'John'
// console.log(age); // 30





// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];




// const newArr = [...arr1, ...arr2];
// console.log(newArr); // [1, 2, 3, 4, 5, 6]




// const copyArr = [...arr1];
// console.log(copyArr); // [1, 2, 3]

// const copyObj = { ...person };
// console.log(copyObj); // { name: 'John', age: 30, hobbies: ['reading', 'running', 'cooking'] }



// function myFunc(arg1, arg2, arg3) {
//     console.log(arg1, arg2, arg3);
// }

// const arr = [1, 2, 3];
// myFunc(...arr); // 1 2 3













const myObj = {
    myMethod() {
        console.log(this);
    }
};

myObj.myMethod(); // logs myObj

const myFunc = myObj.myMethod;
myFunc(); // logs global object (or undefined in strict mode)












