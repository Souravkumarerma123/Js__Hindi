# projects related to DOM


# solution code

## projects 1

```javascript
console.log("Sourav kumar verma")
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach((button) => {
   console.log(button);
   button.addEventListener('click',(e) => {
     console.log(e);
     console.log(e.target);
    switch (e.target.id) {
      case 'grey': 
          body.style.backgroundColor = e.target.id
          button.style.borderRadius = '150px'
          break;
      case 'white': 
          body.style.backgroundColor = e.target.id
          button.style.borderRadius = '5px'
          break;
      case 'blue': 
          body.style.backgroundColor = e.target.id
          button.style.borderRadius = '1000px'
          break;
      case 'yellow': 
          body.style.backgroundColor = e.target.id
          button.style.borderRadius = '150px'
          break;
      case 'pink': 
          body.style.backgroundColor = e.target.id
          button.style.borderRadius = '150px'
          break;
      case 'maroon': 
          body.style.backgroundColor = e.target.id
          button.style.borderRadius = '150px'
          break;
      default:
        body.style.backgroundColor = 'black'   
          break;
  }
   })
})

```

## project 2

```javascript
const form = document.querySelector('form')
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',(e) => {
  e.preventDefault()
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = (document.querySelector('#results'));

  if(height < 0 || height === "" || isNaN(height)){
    results.innerHTML = `Please enter a valid  height ,the given height is ${height}`;
  }
  else if(weight < 0 || weight === "" || isNaN(weight)){
    results.innerHTML = `Please enter a valid  weight ,the given weight is ${weight}`;
  }
  else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // results.innerHTML = `<span>${bmi}</span>`

    let message = `<p>Your BMI is: <strong>${bmi}</strong></p>`;

  if (bmi < 18.6) {
    message += `<p style="color: yellow;">You are <strong>Underweight</strong></p>`;
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    message += `<p style="color: lightgreen;">You are in the <strong>Normal Range</strong></p>`;
  } else {
    message += `<p style="color: orange;">You are <strong>Overweight</strong></p>`;
  }

  results.innerHTML = message;
  }
    
})

```
# project  3
```javascript
const clock = document.querySelector('#clock')


setInterval(function(){
  let date = new Date()
  clock.innerHTML = date.toLocaleTimeString('en-US', {
    hour : 'numeric',
    minute: '2-digit',
    second: '2-digit',
  })
},1)
```
# project 4 
```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);

      if (numGuess > 10 && guess !== randomNumber) {
        displayMessage(`Game Over. Random number was ${randomNumber}`);
        endGame();
      }
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${10 - numGuess} `;
    lowOrHi.innerHTML = '';
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}


```