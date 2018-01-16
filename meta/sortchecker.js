// How to use:
// checkAnswer(array, sortCallback)
// array: the array to sort
// sortCallback: a function that sorts arrays without mutation and returns a
// new sorted copy of the array.

// Example:
// const a = [4, -1, 2, -4, 20, 3, 10];
// checkAnswer(a, mergeSort);
// checkAnswer(a.map((element) => element * -1), merge);

const checkAnswer = (original, sortCallback) => {
    const actual = sortCallback(original);
    const expected = original.slice().sort((a, b) => a - b);

    actual.forEach((value, index) => {
        if (expected[index] !== value) {
            console.log(original, "failed, got: ", actual)
            return;
        }
    });

    console.log(original, "You passed! The value it ended up with is", actual)
};
