function calcSum(a) {
    let currentSum = a;
    let result;

    function f(b) {
        if (Number.isFinite(b)) {
            currentSum += b;
        } else {
            result = currentSum;
        }
        return f;
    }

    f.toString = function () {
        if (currentSum > result) {
            return result;
        } else {
            return currentSum;
        }
    }
    
    return f;
}
