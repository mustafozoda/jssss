
























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













// const myObj = {
//     myMethod() {
//         console.log(this);
//     }
// };

// myObj.myMethod(); // logs myObj

// const myFunc = myObj.myMethod;
// myFunc(); // logs global object (or undefined in strict mode)



// const currentDate = new Date();
// console.log(currentDate.getFullYear()); // Output: 2023





// const myDate = new Date("2023-04-26T10:39:17.300Z");
// console.log(myDate); // Output: 2023-04-26T10:39:17.300Z







// const currentDate = new Date();

// console.log(currentDate.getFullYear()); // Output: 2023
// console.log(currentDate.getMonth()); // Output: 3 (April, because months are zero-based)
// console.log(currentDate.getDate()); // Output: 26
// console.log(currentDate.getDay()); // Output: 2 (Tuesday, because days are also zero-based)
// console.log(currentDate.getHours()); // Output: 10
// console.log(currentDate.getMinutes()); // Output: 52
// console.log(currentDate.getSeconds()); // Output: 15
// console.log(currentDate.getMilliseconds()); // Output: 487

// const futureDate = new Date('2024-01-01');

// console.log(futureDate.getTime()); // Output: 1672508800000 (number of milliseconds since Jan 1, 1970)
// console.log(futureDate.toDateString()); // Output: Wed Jan 01 2024
// console.log(futureDate.toString()); // Output: Wed Jan 01 2024 00:00:00 GMT+0800 (Taipei Standard Time)

// futureDate.setMonth(6); // Set the month to July (5th month, because it's zero-based)
// console.log(futureDate.toString()); // Output: Sun Jul 01 2024 00:00:00 GMT+0800 (Taipei Standard Time)