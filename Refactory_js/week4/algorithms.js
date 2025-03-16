// algorithm is a set of well defined instructions to solve a particular problem
// ingredients-recipe-tasty dish
// inputs-algorithm-output
// eg adding 2 numbers a and b, - 1. add numbers using'+' 2. return the value - sum of 'a' and 'b'
// xtics.1. well defined inputs and outputs  .2.each step should be clear and ambigious .3.should be language indepedent
// time complexity: amount of time taken to run as a function of input size
// and space complexity: amount of memory taken by an algorithm to run, as a function of input size
// representing complexity
// asymptotic notations
// -mathematical tools to represent time and space complexity
// 1. big-O Notation (O-notation) - worst case complexity
// 2. omega Notation - best case complexity
// 3. theta Notation - average case complexity

// big O notation
// describes the complexity of an algorithm using algebraic terms
//  2 xtics. .1. it is expressed in terms of the input .2. it focuses on the bigger picture without getting caught up in the minute details

// big-O time complexity

// n is a parameter that represents the upper limit of the summation. It determines how many numbers will be added together


function summation(n) {
    let sum = 0; // Step 1: Initialize sum to 0

    for (let i = 1; i <= n; i++) { // Step 2: Loop from 1 to n
        sum += i; // Step 3: Add current number to sum
    }

    return sum; // Step 4: Return final sum
}

// Example usage:
console.log(summation(10)); // Output: 55
console.log(summation(5));  // Output: 15