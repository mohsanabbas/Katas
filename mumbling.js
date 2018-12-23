function accum(s) {
  // const alphabets = s.toLowerCase().split('');
  // // console.log(alphabets);
  // const array = alphabets.map((el, idx) => `${el.toUpperCase()}${el.repeat(idx)}`);

  // console.log(array.join('-'));
  // return array.join('-');
  return s.toLowerCase().split('').map((el, idx) => `${el.toUpperCase()}${el.repeat(idx)}`).join('-');
}
accum('eMlet');
