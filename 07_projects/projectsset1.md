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
},1000)
```