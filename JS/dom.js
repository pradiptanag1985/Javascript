//Show the entire DOM
//console.dir(document);

console.log(document.domain);
console.log(document.URL);
console.log(document.title);
//document.title = 123;
console.log(document.head);
console.log(document.body);
console.log(document.all); //HTMLCollection

console.log(document.forms);
console.log(document.links);

var headerTitle = document.getElementById('header-title');
console.log(headerTitle);
//headerTitle.textContent = 'Updated Text';
//headerTitle.innerText = 'Good Bye';
console.log(headerTitle.textContent); //Takes into account the style although the span is hidden
console.log(headerTitle.innerText);
//headerTitle.style.borderBottom = "solid 3px #000";

var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello';

//Changing the background color of all the elements
for(var i = 0; i < items.length; i++) {
    items[i].style.backgroundColor="#f4f4f4";
}

var list = document.getElementsByTagName('li');
console.log(list);

var header = document.querySelector('#main-header'); //id - to be referred with #
console.log(header);

var input = document.querySelector('input'); //Although there are two inputs, it will take 1st one
input.value = 'Your input';

var submit = document.querySelector('input[type="submit"]');
submit.value = 'Register';

var lastItem = document.querySelector('.list-group-item:last-child');
console.log(lastItem);

var itemList = document.querySelectorAll('.list-group-item'); //Class name - to be referred with .
console.log(itemList);

//Traversing the DOM
var itemListForDOM = document.querySelector('#items');
console.log(itemListForDOM.parentNode);
itemListForDOM.parentNode.style.backgroundColor = "#f4f4f4";

console.log(itemListForDOM.parentElement);

console.log(itemListForDOM.childNodes);//Whitespaces included
console.log(itemListForDOM.children);//Whitespaces not included
console.log(itemListForDOM.firstChild);//Whitespaces included
console.log(itemListForDOM.firstElementChild);//Whitespaces not included

console.log(itemListForDOM.nextSibling);//Whitespaces included
console.log(itemListForDOM.nextElementSibling);//Whitespaces not included

console.log(itemListForDOM.previousSibling);//Whitespaces included
console.log(itemListForDOM.previousElementSibling);//Whitespaces not included

//Create Element
var newDiv = document.createElement('div');
newDiv.className = 'hello';
newDiv.id = 'hello1';
newDiv.setAttribute('title', 'Hello Div');
var newDivText = document.createTextNode('Hello World');
newDiv.appendChild(newDivText);
console.log(newDiv);

//Add it to the DOM
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
container.insertBefore(newDiv, h1);