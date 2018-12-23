// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains more than 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique

// function findUniq(arr) {
//   const val = [...new Set(arr)];
//  console.log(val)
// }

function findUniq(arr) {
  const uniq = arr.reduce((acc,curr,idx) => {
    if(acc !== curr){ 
      return curr;
    } 
  },0)
  console.log(uniq);
}
findUniq([ 1, 1, 1, 2, 1, 1 ]);