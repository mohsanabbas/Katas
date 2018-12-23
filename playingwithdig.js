const digPow = (n, p) => {
  
    let sum = 0;
  
    let array = n.toString().split('');
    let mapedArray = array.map(e => parseInt(e, 10));
    for(let index = p, j = 0; index < p + mapedArray.length; index++, j++) {
    let tempNum = Math.pow(mapedArray[j], index);
  sum += tempNum;
}
var k = (sum / n);
    console.log(k);
    console.log(sum);
    if(!(k % 1)) {        
      return k;  
    } 
      return -1;
  };

