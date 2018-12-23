// When you look at movie ratings, you usually see it as decimal numbers representing average of all viewers' votes. While it is very informative, it's not very visually appealing. That's what stars, or in our case- moons, are created for.

// Your task is to transform decimal number rating, which is in range 0-10, into 5-moons scale. Your final rating should be rounded to "0.5" (nearest half moon). Input is always valid.

// Write function moonRating which returns valid rating represented as moons ('o','c','x') in single string.
 let num = [0,1,2,3,4,5,6,7,8,9,10]
let moonRating = (num) => {
    var rand = num[Math.floor(Math.random() * num.length)]
    let fullMoon=rand;
    if(fullMoon === 10){
        console.log('O'.repeat(5));
    }else if(fullMoon===0){
        console.log( 'C'.repeat(( fullMoon /1).toFixed(1)));
    }
    else{
        console.log( 'X'.repeat(( fullMoon /2).toFixed(1)));
    }
    let value = (fullMoon/2).toFixed(1)
console.log(`${value}`)
}
moonRating(num);