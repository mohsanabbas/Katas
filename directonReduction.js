function dirReduc(arr) {
  const newArray = [];
  const obj = {
    NORTH: 'SOUTH',
    SOUTH: 'NORTH',
    EAST: 'WEST',
    WEST: 'EAST',
  };
  let change = false;

  for (let i = 0; i < arr.length; i += 1) {
    if (obj[arr[i]] !== arr[i + 1]) {
      newArray.push(arr[i]);
    } else {
      change = true;
      i += 1;
    }
  }
  if (change === true) {
    return dirReduc(newArray);
  }
  return newArray;
}

dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']);
dirReduc(['NORTH', 'WEST', 'SOUTH', 'EAST']);
dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST']);
