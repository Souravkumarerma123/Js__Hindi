// const instaUser = new Object() //this is singleton object

const instaUser = {} //this is not a singleton object

instaUser.id  = "Super345"
instaUser.name = "sourav"
instaUser.isLoggedIn = false

// console.log(instaUser);


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Sourav",
            middlename : "kumar",
            lastname: "verma"
        }
    }
}
// console.log(regularUser);

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "Souravkumarverma56@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// console.log(users[0].email);
// console.log(users[1].id);


// console.log(Object.keys(instaUser));
// console.log(Object.values(instaUser));
// console.log(Object.entries(instaUser));


// Destructuring of objects

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}


// console.log(course.courseInstructor); // not a efficient way
// console.log(course.price);

const {coursename: name_of_the_course} = course
const {price: kitna_paisa} = course

console.log(name_of_the_course);
console.log(kitna_paisa);

[
    {},
    {},
    {},
    {},
    {},
]