const rgbToHex = function (value) {
  let hex = Number(value).toString(16);
  if (value <= 0) {
    hex = `${hex}`;
  } else if (value > 255) {
    hex = 'FF';
  }
  if (hex.length < 2) {
    hex = `0${hex}`;
    // console.log(hex)
  }

  return hex.toUpperCase();
};

function rgb(r, g, b) {
  // complete this function


  const red = rgbToHex(r);
  const green = rgbToHex(g);
  const blue = rgbToHex(b);
  return `${red}${green}${blue}`;
}
console.log(rgb(300, 255, 255));


