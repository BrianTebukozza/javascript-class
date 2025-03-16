// data structure that can hold a collection of values
// contains a mix of different data types
// arrays are resizable you dont have to declare the size of an array before creating it
// they are zero indexed
// they are iterables. they can be used with a for...of loop


const arr = [1,2,3, 'brian']

// methods
arr.push(4)
// The push() method adds new items to the end of an array. The push() method changes the length of the array

arr.unshift(0)
// The unshift() method adds new elements to the beginning of an array. The unshift() method overwrites the original array.

arr.pop()
// emoves (pops) the last element of an array. The pop() method changes the original array.

arr.shift()
// The shift() method removes the first item of an array. The shift() method changes the original array.

for(const item of arr) {
    console.log(item)
}


// map. filter. reduce. concat. slice and splice


