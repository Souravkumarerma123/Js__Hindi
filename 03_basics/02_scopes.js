let A = 300
if (true) {
    let A = 10
    const B = 20
    // console.log("INNER: ", A);
    
}



// console.log(A);
// console.log(B);
// console.log(C);

function one(){
    const username = "Sourav"
    console.log(username);
    
    function two(){
        const website = " Github"
        console.log(username);
        console.log(website);
        
    }
    // console.log(website);
     two()

}

one()



if (true) {
      const username = "Sourav"
    if (username === "Sourav") {
        const website = " Twitter"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);



// ++++++++++++++++++++++++++++++++++++++Think about it++++++++++++++++++++++++++++++++++++


function addOne(num){
    return num + 1;
}
console.log(addOne(20));
console.log(addTwo(45)); //here comes the concept of hosting which tells that if you define a function as a variable,
                          // then it only prints the console after the function  is defined 
                            // but if you prints the function before it throws an array
const addTwo = function(num){
    return num + 2;
}


