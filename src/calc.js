function sum(a, b) {
    return a + b
}

function sub(a, b) {
    return a - b
}

function multiply(x, y) {
    return x * y
}

function div(x, y) {
    return x / y
}

function percent(num, share) {
    return num / 100 * share
}

// не забудьте дописать сюда новые методы avg, sumAll, min, max, count`
module.exports = {
    sum,
    sub,
    multiply,
    div,
    percent
}