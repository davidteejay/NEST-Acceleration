// given two arrays , find which number is in the first one that isnt in the second one

let array1 = new Array(1, 2, 3, 4, 5);
let array2 = new Array(8, 3, 4, 5, 7);
let array3 = new Array();
let k = "";

for (i = 0; i < array1.length; i++){
    for (j = 0; j < array2.length; j++){
        if (array2[j] == array1[i]){
            k += "found";
        }
    }
    if (k == "") array3.push(array1[i])
}

if (array3.length == 0) console.log("All numbers are present")
else console.log("The missing numbers are " + array3.join(", "))