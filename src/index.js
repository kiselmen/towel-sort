
module.exports = function towelSort (matrix = false) {
  if (matrix === false)  return [];
  let result = [];
  for (i = 0; i < matrix.length; i++){
    rebuilded = null;
    if (i % 2 === 0) {
        rebuilded = matrix[i];
    } else {
        rebuilded = matrix[i].reverse();
    }  
    for (j = 0; j < rebuilded.length; j++){
      result.push(rebuilded[j]);
    }
  }
  return result;
}

