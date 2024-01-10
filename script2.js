const fruits = ["Apple", "Blue berry", "Oranges"];

console.log(fruits.length); // 3 total items in array

fruits.push("Mango"); // to add more items to the list. "push" is built in function. it will be added as last in array

console.log(fruits);

fruits.unshift("Grapes"); // with the unshift (built in function) makes the new added item go first in the array.
console.log(fruits);

fruits.pop();
console.log("using pop : ", fruits); // removes the last item in array

fruits.shift();
console.log("using shift", fruits); // removes the first item in array

const numbers = [3, 4, 100, 88, 54, 5];

numbers.sort();
console.log(numbers);

let animal = "Dog"; // 0 1 2 is the length of array. scripts views string as array and this is how to count the length

console.log(animal.length);

//               0        1             2
const cars = ["bmw", "volkswagen", "toyota"];

console.log("The index of volkswagen is ", cars.indexOf("volkswagen"));
// indexOf is built in and wil tell the position of the first "volkswagen" in array and only the first.

// Objects can be a block of info used in curly brackets {}
// in this example, whatever is inside the curly brackets is the object of user

const user = {
  name: "Monde",
  Age: 30,
  job: "Software Engineer",
  wealth: 230040404040404040,
};

console.log(user);

console.log(user.Age);
console.log(user.name);
console.log(user.wealth);

// to add more in one line use "+" or ","
//without adding text is may be confusing getting all in one line ?

console.log("Hello my name is" + user.name + " and i am " + user.Age + " years old, i own " + user.wealth + " Dollars " + " and i work as a " + user.job);

// output Hello my name isMonde and i am 30 years old, i own 230040404040404030 Dollars  and i work as a Software Engineer

console.log(
    `Hello my name is ${user.name} and i am ${user.age} years old, i own ${user.wealth} Dollars. I work as a ${user.job}`
);

// same output just a nother way instead of + and "" we use $ and single quotes `


// Array of books with many objects inside
const books = [

    { // true
        title: "The hobbit",
        author: "Hesham El Masry",
        pages: 300 //
    },
    { // false
        title: "Drive with me in my car",
        author: "Kevin Heart",
        pages: 100
    },
    { // false
        title: "One thousand and one One Nights",
        author: "Some guy",
        pages: 3000
    }
]

//how to find the first book and its object in the array ( again we use 0 as the first)

console.log("My first book", books[0]); // only to find whatever is first and not to " search and find a specific object in a array"

const searchBook = books.find(function (book) {
    // define searching criteria here
    return book.title === "The hobbit";
});
// when using find, it searches in false or true. and is the right way to search for specific object, in this case a book. Still its searches for the first element with the name "The hobbit".

console.log("searchbook: ", searchBook)

// output title: 'The hobbit', author: 'Hesham El Masry', pages: 300

// What really is a function in javascript?
//its a set of actions or code, run when we call the function name.

function DoorRing(withCamera) {
    console.log("I will go open the door the person is: " + withCamera);
}

DoorRing("Monde photo");

function logWord(theWord) {
    console.log(theWord);
}

logWord ("hesham");
logWord ("Line");

//how to add two numbers as in a calculator (still talking about functions) any functions will return something

// Function to add two numbers
function addTwoNumbers(num1, num2) {
    // The function takes two parameters, num1 and num2, and returns their sum
    return num1 + num2;
}

// Example usage of the addTwoNumbers function
const sum = addTwoNumbers(10, 20);

// Output the result to the console
console.log("The sum of 10 and 20 is:", sum);