//  types of datatypes

//1. primitive
//2. non primitive

// javascript is Dynamically typed language


const Score = 100
const ScoreValue= 100.3

const isLoggedIn = false
const outsideTemp = null
let UserEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 4398568986909n
// console.log(typeof bigNumber);



// primitive

//7 types : String,Number,Boolean,null,undefined,symbol,bigInt

// Reference (non primitive)

//Array, Objects, Functions

// +++++++++++++++++++Array++++++++++++++++++++++

const planet = ["Earth","Mars","Saturn","pluto"];

let myObj = {
    name: "Sourav",
    age : 20,
    isLoggedIn: true
}
const myFunction = function(){
    console.log("Hello");  
}

// console.log(typeof myFunction);
// console.log(typeof planet);
// console.log(typeof Symbol);

// stack(Primitive)  // Heap(non primitive)

let myyoutubeName = "Doremoon123"
let anothername = myyoutubeName;
anothername = "Souravkumarverma"
console.log(myyoutubeName);
console.log(anothername);


let userOne = {
    email: "user@google.com",
    upi:"user@ybl"
}

let userTwo =  userOne

userTwo.email = "Sourav@google.com"
console.log(userOne.Email);
console.log(userTwo.Email);

