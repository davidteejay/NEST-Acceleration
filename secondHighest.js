function secondHighest(array){
    for (var i = 1; i < array.length; i++) {
        for (var j = 1; j< array.length; j++){
            if (array[j - 1] > array[j]) {
                let temp = array[j - 1];
                array[j - 1] = array[j];
                array[j] = temp;
            }
        }
    }

    // array = array.sort(function(a,b){return a - b})
    return array[array.length - 2]
}

console.log(secondHighest([3,9,17,5,6,2]))