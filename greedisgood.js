function score(dice) {
  const sdr = [100, 0, 0, 0, 50, 0];
  const tdr = [1000, 200, 300, 400, 500, 600];
  const dc = [0, 0, 0, 0, 0, 0];
  dice.forEach(el => dc[el - 1]++);
  console.log(dc);
  return dc.reduce((acc, curr, i) => acc + (curr >= 3 ? tdr[i] : 0) + sdr[i] * (curr % 3), 0);
}
console.log(score([4, 3, 1, 1, 1]));
