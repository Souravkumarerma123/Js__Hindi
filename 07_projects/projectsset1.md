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