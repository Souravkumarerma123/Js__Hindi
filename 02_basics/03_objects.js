// singleton
// Object.create

// object literals
mySyn = Symbol("Rank1")
const JsStudent = {
    name : "Sourav",
    age : 20,
    [mySyn]: "Rank1",
    email: "sourav@google.com",
    location: "noida",
    isLoggedIn: true,
    lastLoginDays: ["Mon","Fri"]
}

console.log(JsStudent.name);
// console.log(typeof JsStudent.mySyn);
console.log(JsStudent[mySyn]);
console.log(JsStudent.email);
console.log(JsStudent.location);
console.log(JsStudent.lastLoginDays);

JsStudent.location = "Delhi"
console.log(JsStudent);

// Object.freeze(JsStudent)  // it freeze the the object after this if you make any changes it will not be changed
JsStudent.name = "Gourav"
console.log(JsStudent.name);

JsStudent.greeting = function(){
    console.log("hello Js Student");
}
console.log(JsStudent.greeting);
console.log(JsStudent.greeting());


JsStudent.anotherGreeting = function(){
    console.log(`hello js Student :${this.name}`);
}
console.log(JsStudent.anotherGreeting());
