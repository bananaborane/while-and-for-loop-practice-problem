// FizzBuzz - Bob Ross edition
// write a function that takes in one number.
// Starting at 1, console log every number up to the number passed in.
// If the number being logged is divisible by 3 log 'Bob' instead.
// If the number is divisible by 5 we will log 'Ross' instead.
// If they are divisible by both 3 and 5 we will log 'Bob Ross'

// Challenge Mode
// Use a 'while' or 'do while' loop



///////    DO {} WHILE () METHOD:
let bobRoss = function(num){
    let j = 1;
    do {
      if (j%3===0 && j%5===0){
        console.log("Bob Ross")
  
      } else if (j%3===0){  
        console.log("Bob")
  
      } else if (j%5===0){
        console.log("Ross")
  
      } else {
        console.log(j)
  
      }
      j++;
    } while (j<=num)
  }
  
  bobRoss(45);