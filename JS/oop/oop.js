const s1 = 'Hello';
console.log(typeof s1); //string

const s2 = new String('Hello');
console.log(typeof s2); //object

//Object Literal
const book = {
    title : 'Book1',
    author: 'John',
    year : 1981,
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
};

console.log(book);
console.log(book.title);
console.log(book.getSummary());

console.log(Object.values(book));
console.log(Object.keys(book));


//Constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    console.log('Book1 instantiated');
}

Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
}

const book1 = new Book('Hello', 'John', 1981);
console.log(book1.title);
console.log(book1.getSummary());

//Inheritance
function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);
    this.month = month;
}

const mag1 = new Magazine('Magazine', 'John', 1981, 10);
console.log(mag1.title);

//Object of protos
const bookProtos = {
    getSummary : function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

const book2 = Object.create(bookProtos);
book2.title = 'Hello';
book2.author = 'John';
book2.year = 1981;
console.log(book2);

const book3 = Object.create(bookProtos, {
    title : {value : 'Hello 2'},
    author : {value : 'John'},
    year : {value : 1981}
});
console.log(book3);

//ES6
class BookClass {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
        console.log('Book class instantiated');
    }

    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

const classBook = new BookClass('New', 'John', 1990);
console.log(classBook);
console.log(classBook.getSummary());

class MagazineClass extends Book {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }
}

const classMagazine = new MagazineClass('New Mag', 'John', 1990, 10);
console.log(classMagazine);
    
