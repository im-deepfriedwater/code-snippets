// Simple quicksort implemented in JavaScript.
// Space inefficient, can be improved.
// Does not mutate the original array.

const quicksort = (array) => {
    if (array.length <= 1) {
        return array;
    }

    const arrayCopy = array.slice(0);
    const pivot = arrayCopy.pop();
    const lesser = [];
    const greater = [];

    arrayCopy.forEach((element) => {
        if (element > pivot) {
            greater.push(element);
        } else {
            lesser.push(element);
        }
    });

    return quicksort(lesser).concat(pivot, quicksort(greater))
};
