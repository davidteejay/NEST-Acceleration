function secondHighest(array){
    for (var i = 1; i < array.length; i++) {
        if (array[i - 1] > array[i]) {
          let temp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = temp;
        }
    }

    return array[array.length - 2];
}

console.log(secondHighest([3,2,17,5,6,9]))