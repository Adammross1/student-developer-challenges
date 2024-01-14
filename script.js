// Challenge 1
function reverseString(input) {
  return input.split('').reverse().join('');
}

// Example
let sInput = "string";
let sOutput = reverseString(sInput);
console.log(sOutput);


// Challenge 2
function findMaxNum(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}

// Example
let iMaxNum = findMaxNum(1, 3, 2);
console.log(iMaxNum);


// Challenge 3
function calculateFactorial(n) {
  if (n === 0 || n === 1) 
  {
      return 1;
  } 
  else 
  {
      let iOutput = 1
      while (n > 1)
      {
        iOutput *= n;
        n--;
      }
      return iOutput;
  }
}

// Example
var result = calculateFactorial(3);
console.log(result);


// Challenge 4
function fibonacciNth(iInput) {
  if (iInput <= 0) {
      return "Invalid input. Please provide a positive integer.";
  } else if (iInput === 1 || iInput === 2) {
      return 1;
  } else {
      let iPrevious = 1;
      let iCurrent = 1;

      for (let iCount = 3; iCount <= iInput; iCount++) {
          let iNum = iCurrent;
          iCurrent += iPrevious;
          iPrevious = iNum;
      }

      return iCurrent;
  }
}

// Example usage:
var result = fibonacciNth(5);
console.log(result);