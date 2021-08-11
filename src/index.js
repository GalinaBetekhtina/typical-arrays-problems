
exports.min = function min (array) {
    if (typeof array === 'undefined' || array.length === 0) {
        return 0;
    } else {
        let min = array[0];      
        for (let i = 1; i < array.length; i++) {  
            if (array[i] < min) {
                min = array[i];
            }; 
        };  
        return min;
    };
};
    /*let min = array[0];
    if (array.length > 0) {
      for (let i = 1; i < array.length; i++) {  
          if (array[i] < min) {
              min = array[i];
          }  
      }
       return min;
    } else {
      return 0;
    } */
    


exports.max = function max (array) {
    if (typeof array === 'undefined' || array.length === 0) {
        return 0;
    } else {
        let max = array[0];      
        for (let i = 1; i < array.length; i++) {  
            if (array[i] > max) {
                max = array[i];
            }; 
        };  
        return max;
    };
}

exports.avg = function avg (array) {
  if (typeof array === 'undefined' || array.length === 0) {
      return 0;
  } else {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    };
    let avg = sum / array.length;
    return avg;
  };
}
