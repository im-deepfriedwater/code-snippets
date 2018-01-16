const mergeSort = (array) => {
    if (array.length <= 1) {
        return;
    }



    merge(mergeSort(array.sub), mergeSort(right))
};


const newArray = [];
let a = 0;
let b = 0;
for (let i = 0; i < newArray.length; i++){
    if (a !== left.length - 1 && left[a] < right[b]) {
        newArray.push(left[a]);
        a++;
    } else if (b !== right.length - 1 && left[a] > right[b]) {
        newArray.push(right[b]);
        b++;
    }
}

return newArray;
