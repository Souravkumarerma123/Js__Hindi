// Dates

let myDate = new Date()

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

//  let myCreaatedDate = new Date (2025, 3, 22, 2, 54);
//  let myCreaatedDate = new Date("2025-01-22");
// let myCreaatedDate = new Date("01-14-2025");
// console.log(myCreaatedDate.toDateString());
//   console.log(myCreaatedDate.toLocaleDateString());
//  console.log(myCreaatedDate.toLocaleString());

 let myTimeStamp = Date.now()

console.log(typeof myTimeStamp);

// console.log(myTimeStamp);
// console.log(myCreaatedDate.getTime());

console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);
console.log(newDate.toLocaleString('default', {
    weekday: "long",

}));


