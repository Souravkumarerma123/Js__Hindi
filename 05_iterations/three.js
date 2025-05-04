  // for of

// [" "," "," "]

// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]

// for (const element of arr) {
//     console.log(element);
// }

const greetings = "Hello world"

for (const greet of greetings) {
    if (greet == " ") {
        continue;
    }
    // console.log(`value of each char is ${greet}`);
    
}

//maps
const map = new Map()
map.set('JH',"Jharkkhand")
map.set('DL',"Delhi")
map.set('MP',"Madhya pradesh")
map.set('UP',"Uttar pradesh")
map.set('WB',"West Bengal")
// console.log(map);

for (const [key, value] of map) {
    // console.log(key,':-', value);
    
}

// ++++++++++++++++++++++++++++++for in(use mostly for objects )+++++++++++++++++++++++++++++++++++++++++++++++++=


const myGame = {
    game1: "Free fire",
    game2: "BGMI",
    game3: "vellorant",
    game4: "GTA 5"
}

for (const key in myGame) {
    // console.log(`${key},is the key for the game ${myGame[key]}`);
    }

const language = {
    'js': "javascript",
    'py': "python",
    'TS': "Tpyescript"
}

    for (const key in language) {
    console.log(`${key} stands for ${language[key]}`); 
    }


  //+++++++++++++++++++++++++++++++++++++++ for each ++++++++++++++++++++++++++++++++++++++++++++++++++


   const MyDreamDestination = ["JAPAN","SINGAPORE", "NORWAY", "LONDON"]

    // MyDreamDestination.forEach((places) => {
    //     console.log(places);
    // });

    // function printMe(places){
    //     console.log(places);
    
    // }
    // MyDreamDestination.forEach(printMe)

MyDreamDestination.forEach((places,index,arr)=> {
    console.log(places,index,arr);
    
})

Mycoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
]
   Mycoding.forEach((item) => {
    console.log(item.languageFileName);
    // console.log(`${item.languageFileName} stands for ${item.languageName}`);
    
   })
