// Worked on with @yshin4.
// Currently space inefficient due to creating new arrays at each divide.
// This could be addressed by working with indices and a single array
// rather than making new copies of the original array.
// However, it serves demonstrative and general mergesort algorithm purposes.

// Recursive mergesort written in JavaScript:

mergeSort = (array) => {
    if (array.length <= 1) {
        return array;
    }

    const middle = array.length / 2;

    return merge(
        mergeSort(array.slice(0, middle)),
        mergeSort(array.slice(middle, array.length))
    );
};


merge = (left, right) => {
    const newArray = [];

    let a = 0;
    let b = 0;

    while (a < left.length || b < right.length) {
        if (a >= left.length) {
            newArray.push(right[b]);
            b++;

        } else if (b >= right.length) {
            newArray.push(left[a]);
            a++;

        } else if (left[a] <= right[b]) {
            newArray.push(left[a]);
            a++;

        } else {
            newArray.push(right[b]);
            b++;
        }
    }

    return newArray;
};
