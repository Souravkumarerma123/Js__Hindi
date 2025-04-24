const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
const super_heroine = ["Wonder women", "Wanda", "Black widow"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][0]);

// const all_heros = marvel_heros.concat(dc_heros, super_heroine)
// console.log(all_heros);

const all_another_heros = [...marvel_heros,...dc_heros,...super_heroine]
console.log(all_another_heros);


const another_array = [1, 2, 3, 4, 5, [9, 8], 12, [[3, 4, 5, 6], 34]]

// const new_formOfArray = another_array.flat(3)    // it is more preferable
// or it can be done in an another way 
const new_formOfArray = another_array.flat(Infinity)

console.log(new_formOfArray);


console.log(Array.isArray("Sourav"));
console.log(Array.from("Sourav"));



let marks1 = 100
let marks2 = 200
let marks3 = 600
let marks4 = 400

console.log(Array.of(marks1, marks2, marks3, marks4));

