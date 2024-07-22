// Activity 1: Object Creation and Access
// Task 1: Create an object for book with title, author, year and genre

let book = {
    title: "Bhagwat Geeta",
    author: "Ved Vyas",
    year: 5000
}

console.log(book);

// Task 2: Access the object values of object

console.log(book.title);
console.log(book.author);
console.log(book.year);

// Activity 2: Object Methods
// Task 1: Add a method to the book object that returns a string with the book title and author

book.info = function(){
    return `${this.title} was written by ${this.author}, ${this.year} years ago`;
}

console.log(book.info());

// Task 2: Add a method to the book that takes year as a parameter and updates book's year property

function updateYear(book, year){
    book.year = year;
}

updateYear(book, 5448);
console.log(book.year);

// Activity 3: Nested Objects
// Task 1: Create a nested object representing a library with properties like books(an array of book objects)

let library = {
    name: "Central Library",
    location: "New Delhi",
    books: [
        {
            title: "first",
            author: "first author",
            year: 2020
        },
        {
            title: "second",
            author: "second author",
            year: 2021
        },
        {
            title: "third",
            author: "third author",
            year: 2022
        }
    ]
}

console.log(library);


// Task 2: access and log the name of the library and the titles of all the books in the library

console.log(library.name);
library.books.map(bk => console.log(bk.title));

// Activity 4: The this Keyword
// Task 1: Add a method to the book object that uses the this keyword to return a string with the book's title and year 

book.info = function() {
    return `${this.title} was written in ${this.year}`;
}

console.log(book.info());

// Activity 5: Object Iteration
// Task 1: Use a for...in loop to iterate over the properties of the book object and log them in the console


for (let key in book) {
    if (typeof book[key] !== 'function') {
        console.log(book[key]);
    }
}

// Task 2: use object.keys and object.values to log all the keys and values of the book object

console.log(Object.keys(book));
console.log(Object.values(book));