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

