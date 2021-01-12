function calcSumFromFibonacci(from, to) {

    if (!Number.isFinite(from) || !Number.isFinite(to) || from < 0 || from >= to) {
        throw new Error('Incorrect input');
    }

    let sum;
    let arr = [];
    arr[0] = 0;
    arr[1] = 1;

    for (let i = 2; i < to + 1; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }

    const sortArr = (arr.filter(elem => {
        if (elem >= from && elem <= to) {
            return true;
        }
    }));

    sum = sortArr.reduce((accum, elem) => {
        return accum + elem;
    })
}
