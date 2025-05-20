// Prime number checker
function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Ask user for a number
let input = prompt("Enter a number to check if it's prime:");
let number = parseInt(input);

// Validate input
if (isNaN(number)) {
  console.log("Invalid input. Please enter a valid number.");
} else {
  if (isPrime(number)) {
    console.log(number + " is a prime number.");
  } else {
    console.log(number + " is not a prime number.");
  }
}
