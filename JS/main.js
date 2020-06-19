alert("hello world from js intro");
console.log('Test console logging');
console.error('Test console logging - Error');
console.warn('Test console logging - Warn');

//Variable - var - global, 
//let - can change value
//const - can't change value
let letVar;
letVar = 10;
console.log('Let Var : ' + letVar);

const constVar = 10;
console.log('Const Var : ' + constVar);

//Datatype - String, Number, Boolean, undefined, null, Symbol
const name = 'Pradipta';
const age = 35;
const isCool = true;
const rating = 4.5;
const x = null;
const y = undefined;
let z; //undefined
console.log(typeof(z)); //check type
console.log(typeof(x)); //object

//String
//concatenation -  template literals
const helloMsg = `My name is ${name} and I am ${age} years old`;
console.log(`Template literal example : ${helloMsg}`);
console.log(helloMsg.length);
console.log(helloMsg.toUpperCase());

//Arrays
const numbers = new Array(1, 2, 3);
console.log(numbers);

const fruits = ['apple', 'orange', 10];
console.log(fruits);
console.log(fruits[1]);
fruits[3] = 'grapes';
fruits.push('mango'); //Add to last
fruits.unshift('banana'); //Add to the beginning
console.log(fruits);
fruits.pop();//Remove last element
console.log(fruits);
console.log(Array.isArray(fruits)); //Check if the element is an array
console.log(fruits.indexOf('banana'));


//Object literals
const person = {
    firstName : 'Pradipta',
    lastName : 'Nag',
    hobbies : ['singing', 'painting'],
    address : {
        street : 'Jessore Road',
        state : 'West Bengal'
    }
};

console.log(person, person.lastName);
const { firstName, lastName, address : {state} } = person; //Pulls the values from object
console.log(`Desructuring : ${firstName} ${lastName} from ${state}`);

const arrayOfObjs = [
    {
        id : 1,
        name : 'Ajay'
    }, 
    {
        id : 2,
        name : 'Pradz'
    }
];

console.log(arrayOfObjs[1].name);

const toJson = JSON.stringify(arrayOfObjs); //Cnvert to Json
console.log(toJson);

//Loops
for(let i = 0; i < 10; i++) {
    console.log(`Inside for loop : ${i}`);
}

for(let el of arrayOfObjs) {
    console.log(el.name);
}

//forEach, map, filter
arrayOfObjs.forEach(function(element) {
    console.log(`For each loop example : ${element.name}`)
})

const mappedArray = arrayOfObjs.map(function(element) {
    return element.name;
});
console.log(`Mapped array : ${mappedArray}`);

const filteredArray = arrayOfObjs.filter(function(element) {
    return element.id === 1;
});
console.log(`Filtered array : ${filteredArray.length}`);

//Condition
const cond = 10;
if(cond == 10) {
    console.log('Equal irrespective of type'); //=== -> Checks the type
}

function addNum(num1 = 1, num2 = 3) {
    console.log(num1 + num2);
}

addNum(3, 6); //If you don't pass params ou'll get NaN
addNum(); //If default values are there, they are considered

//Arrow function
const addNums = (num1, num2) => num1 + num2;
console.log(addNums(2, 5));

arrayOfObjs.forEach((element) => console.log(`For each loop example with arrow function : ${element.name}`));

//Constructor
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}

Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}
//Object
const p1 = new Person('Pra', 'Nag', '12-12-2012');
console.log(p1);
console.log(p1.getBirthYear());
console.log(p1.getFullName());

//Class
class PersonClass {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }
}

//Object
const p2 = new PersonClass('Pra', 'Nag', '12-12-2012');
console.log(p2);
console.log(p2.getBirthYear());


//DOM Manipulation
console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));

const items = document.querySelectorAll('.item');

items.forEach((item) => console.log(item));

const ul = document.querySelector('.items');
ul.remove();

/*const btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Click event');
    console.log(e.target);
    document.querySelector('#my-form').style.background = '#ccc';
});*/

const myForm = document.querySelector('#my-form');
const nameField = document.querySelector('#name');
const msg = document.querySelector('.msg');
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    console.log(nameField.value);

    if(nameField.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter value in the name field';

        setTimeout(() => msg.remove(), 3000);
    } else {
        console.log('success');
    }
}