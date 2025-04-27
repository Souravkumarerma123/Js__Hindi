function printMyname(){
    console.log("S");
    console.log("o");
    console.log("u");
    console.log("r");
    console.log("a");
    console.log("v");
    console.log(" ");
    console.log("k");
    console.log("u");
    console.log("m");
    console.log("a");
    console.log("r");
    
}
// printMyname();

function addTwoNumbers(num1, num2){
    return num1 + num2;
}

final_sum = addTwoNumbers(15, 5);
console.log("Result : ", final_sum);

function loginUserMessage(username){
// function loginUserMessage(username = "Samir"){
    if(!username){
        console.log("Please enter your name");
        return
        // or you can predefined the name  so if the user does not give the name it uses the name

    }
      return `${username} has just logged in`
}


// function loginUserMessage(username = "sam"){
//     if(!username){
//         console.log("PLease enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

 console.log(loginUserMessage())
 

 function caluclateCartPrice(...num1){
    return num1
 }

//  const total_price = caluclateCartPrice(200, 500, 45, 68, 567, 2000, 50, 122);
//  console.log(total_price);
 
 console.log(caluclateCartPrice(200, 500, 45, 68, 567, 2000, 50, 122));

 const user = {
    username: "Annu" ,
    price: 2200
 }

 function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and the price of his cart is ${anyObject.price} `);
    return anyObject;
 }

 handleObject(user);

//  handleObject({username: "Annu",
//     price: 2200});

const myNewArray = [200, 400, 100, 600]

function returnThirdValue(getArray){
    return getArray[2];
}

console.log(returnThirdValue(myNewArray));
// console.log(returnThirdValue([200, 400, 100, 600]));