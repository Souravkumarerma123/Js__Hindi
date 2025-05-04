 const coding = ["java", "javascript", "c", "cpp", "Ruby"]

// myLanguage = coding.forEach((item) => {
//     // console.log(item);
//     return item
// })

const programming = []
 coding.forEach((lang) => {
    programming.push(lang)
})

// console.log(programming);

//for each does not return the  items it prints only .so we use other methods


const myNumbers = [1,2,3,4,5,6,7,8,9,33,56] 

const newNums = myNumbers.filter((num) => num > 2 )
// const newNums = myNumbers.filter((num) => {
//   return  num > 2 
// })

//  console.log(newNums);

// const newNums = []
// myNumbers.forEach ((num) => {
//   if (num > 4) {
//     newNums.push(num)
//   }
// })

// console.log(newNums);

const library = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// const userbooks = library.filter((book) => book.genre ==='Science' )
// const userbooks = library.filter((book) => book.publish <= 2000 )
// const userbooks = library.filter((book) => book.genre === 'History')
const userbooks = library.filter((book) => book.genre === 'Science' || book.genre === 'History' )
// userbooks = library.filter((book) => book.publish <= 2000 && book.genre === 'History' && book.genre === 'Fiction' )
//  userbooks = library.filter((book) => book.publish <= 2000 && book.genre === 'History' && book.genre === 'Fiction' )




console.log(userbooks);
