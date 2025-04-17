const accountId = 144553
let accountEmail = "sourav@gmail.com"
var accountPassword = "123456"
accountCity = "Jaipur"
 let accountstate; 
//  accountId = 2 //not allowed

 accountEmail = "sourav@ai.com"
 accountPassword = "212121"
 accountCity = "bengaluru"

console.log(accountId);
/*
prefer not use of var 
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity])
 
console.log(accountstate);


