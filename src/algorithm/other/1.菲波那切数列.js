/**
 * 菲波那切数列：0，1，1，2，3，5，8，13
 */

const fibonacci = (n) => {
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    let result = [0, 1];
    for (let i = 2; i < n - 1; i++) {
        result[i] = result[i - 1] + result[i - 2];
        console.log(result)
    }
    return result;
}

console.log(fibonacci(10));