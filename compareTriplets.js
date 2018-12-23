function compareTriplets(a, b) {
    let alice = 0;
    let bob = 0;
    const result = [];
    a.forEach((element,i) => {
      (a[i] < b[i]) ? alice++ : (b[i] < a[i])? bob++ :null
    });
    return [...result, bob, ...result, alice];
   
  }
  console.log(compareTriplets([17, 28, 30], [22, 5, 6]));